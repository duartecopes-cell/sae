(function () {
    "use strict";

    function number(value, fallback) {
        const parsed = Number(value);
        return Number.isFinite(parsed) ? parsed : fallback;
    }

    function clamp(value, min, max) {
        return Math.max(min, Math.min(max, value));
    }

    function escapeHTML(value) {
        return String(value || "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
    }

    function linePoints(values, width, height, pad) {
        const maxIndex = Math.max(values.length - 1, 1);
        return values.map((value, index) => {
            const x = pad + (index / maxIndex) * (width - pad * 2);
            const y = height - pad - (clamp(value, 0, 100) / 100) * (height - pad * 2);
            return `${x.toFixed(1)},${y.toFixed(1)}`;
        }).join(" ");
    }

    function renderLineChart(series) {
        const width = 520;
        const height = 250;
        const pad = 34;
        const labels = ["Ini", "Prep", "Med", "Cierre", "Final"];
        const grid = [0, 25, 50, 75, 100].map((value) => {
            const y = height - pad - (value / 100) * (height - pad * 2);
            return `<line x1="${pad}" y1="${y}" x2="${width - pad}" y2="${y}" class="chart-grid-line"></line>`;
        }).join("");
        const xLabels = labels.map((label, index) => {
            const x = pad + (index / (labels.length - 1)) * (width - pad * 2);
            return `<text x="${x}" y="${height - 8}" class="chart-axis-label" text-anchor="middle">${label}</text>`;
        }).join("");
        const lines = series.map((item) => `
            <polyline points="${linePoints(item.values, width, height, pad)}" class="chart-line" style="--chart-color:${item.color}"></polyline>
        `).join("");
        const legend = series.map((item) => `
            <span><i style="--chart-color:${item.color}"></i>${escapeHTML(item.label)}</span>
        `).join("");

        return `
            <svg class="chart-svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" aria-hidden="true">
                ${grid}
                ${lines}
                ${xLabels}
            </svg>
            <div class="chart-legend">${legend}</div>
        `;
    }

    function renderBarChart(items) {
        const max = Math.max(100, ...items.map((item) => item.value));
        return `
            <div class="bar-chart">
                ${items.map((item) => {
                    const height = clamp((item.value / max) * 100, 3, 100);
                    return `
                        <div class="bar-item">
                            <div class="bar-track">
                                <div class="bar-fill" style="height:${height}%; --bar-color:${item.color}"></div>
                            </div>
                            <strong>${Math.round(item.value)}</strong>
                            <span>${escapeHTML(item.label)}</span>
                        </div>
                    `;
                }).join("")}
            </div>
        `;
    }

    function piePath(cx, cy, radius, start, end) {
        const startRad = (start - 90) * Math.PI / 180;
        const endRad = (end - 90) * Math.PI / 180;
        const x1 = cx + radius * Math.cos(startRad);
        const y1 = cy + radius * Math.sin(startRad);
        const x2 = cx + radius * Math.cos(endRad);
        const y2 = cy + radius * Math.sin(endRad);
        const largeArc = end - start > 180 ? 1 : 0;
        return `M ${cx} ${cy} L ${x1.toFixed(2)} ${y1.toFixed(2)} A ${radius} ${radius} 0 ${largeArc} 1 ${x2.toFixed(2)} ${y2.toFixed(2)} Z`;
    }

    function renderPieChart(items) {
        const total = items.reduce((sum, item) => sum + item.value, 0) || 1;
        let angle = 0;
        const slices = items.map((item) => {
            const next = angle + (item.value / total) * 360;
            const path = `<path d="${piePath(120, 120, 88, angle, next)}" fill="${item.color}"></path>`;
            angle = next;
            return path;
        }).join("");
        const legend = items.map((item) => `
            <span><i style="--chart-color:${item.color}"></i>${escapeHTML(item.label)} <b>${Math.round((item.value / total) * 100)}%</b></span>
        `).join("");

        return `
            <div class="pie-chart">
                <svg viewBox="0 0 240 240" aria-hidden="true">
                    <circle cx="120" cy="120" r="91" class="pie-ring"></circle>
                    ${slices}
                    <circle cx="120" cy="120" r="46" class="pie-hole"></circle>
                </svg>
                <div class="pie-legend">${legend}</div>
            </div>
        `;
    }

    function renderGaugeChart(value, items) {
        const pct = clamp(value, 0, 100);
        const radius = 58;
        const circumference = 2 * Math.PI * radius;
        const dash = (pct / 100) * circumference;
        const color = pct >= 75 ? "#22c55e" : pct >= 55 ? "#1877f2" : pct >= 35 ? "#f97316" : "#ef4444";

        return `
            <div class="gauge-chart">
                <svg class="gauge-svg" viewBox="0 0 180 180" aria-hidden="true">
                    <circle cx="90" cy="90" r="${radius}" class="gauge-track"></circle>
                    <circle cx="90" cy="90" r="${radius}" class="gauge-fill" style="--gauge-color:${color}; stroke-dasharray:${dash.toFixed(2)} ${circumference.toFixed(2)}"></circle>
                    <text x="90" y="96" class="gauge-number" text-anchor="middle">${Math.round(pct)}</text>
                </svg>
                <div class="gauge-rails">
                    ${items.map((item) => `
                        <div class="gauge-rail">
                            <span>${escapeHTML(item.label)}</span>
                            <div><i style="width:${clamp(item.value, 0, 100)}%; --bar-color:${item.color}"></i></div>
                        </div>
                    `).join("")}
                </div>
            </div>
        `;
    }

    function radarPoint(value, index, total, radius, cx, cy) {
        const angle = ((Math.PI * 2) / total) * index - Math.PI / 2;
        const distance = (clamp(value, 0, 100) / 100) * radius;
        return {
            x: cx + Math.cos(angle) * distance,
            y: cy + Math.sin(angle) * distance
        };
    }

    function renderRadarChart(items) {
        const cx = 130;
        const cy = 105;
        const radius = 72;
        const total = items.length;
        const points = items.map((item, index) => {
            const point = radarPoint(item.value, index, total, radius, cx, cy);
            return `${point.x.toFixed(1)},${point.y.toFixed(1)}`;
        }).join(" ");
        const grid = [25, 50, 75, 100].map((level) => {
            const gridPoints = items.map((_, index) => {
                const point = radarPoint(level, index, total, radius, cx, cy);
                return `${point.x.toFixed(1)},${point.y.toFixed(1)}`;
            }).join(" ");
            return `<polygon points="${gridPoints}" class="radar-grid"></polygon>`;
        }).join("");
        const axes = items.map((item, index) => {
            const edge = radarPoint(100, index, total, radius, cx, cy);
            const label = radarPoint(118, index, total, radius, cx, cy);
            return `
                <line x1="${cx}" y1="${cy}" x2="${edge.x.toFixed(1)}" y2="${edge.y.toFixed(1)}" class="radar-axis"></line>
                <text x="${label.x.toFixed(1)}" y="${label.y.toFixed(1)}" class="radar-label" text-anchor="middle">${escapeHTML(item.label)}</text>
            `;
        }).join("");
        const dots = items.map((item, index) => {
            const point = radarPoint(item.value, index, total, radius, cx, cy);
            return `<circle cx="${point.x.toFixed(1)}" cy="${point.y.toFixed(1)}" r="3.5" class="radar-dot" style="--chart-color:${item.color}"></circle>`;
        }).join("");

        return `
            <svg class="radar-svg" viewBox="0 0 260 210" aria-hidden="true">
                ${grid}
                ${axes}
                <polygon points="${points}" class="radar-area"></polygon>
                ${dots}
            </svg>
        `;
    }

    function renderHeatmap(values) {
        return `
            <div class="heatmap-chart">
                ${values.slice(0, 16).map((value) => {
                    const pct = clamp(value, 0, 100);
                    const color = pct >= 75 ? "#22c55e" : pct >= 52 ? "#1877f2" : pct >= 32 ? "#f97316" : "#ef4444";
                    const alpha = clamp(0.24 + pct / 118, 0.24, 0.98);
                    return `<i class="heat-cell" style="--cell-color:${color}; --cell-alpha:${alpha.toFixed(2)}"></i>`;
                }).join("")}
            </div>
        `;
    }

    function renderStackChart(items) {
        return `
            <div class="stack-chart">
                ${items.map((item) => `
                    <div class="stack-row">
                        <span>${escapeHTML(item.label)}</span>
                        <div class="stack-track">
                            <i class="stack-fill" style="width:${clamp(item.value, 0, 100)}%; --bar-color:${item.color}"></i>
                        </div>
                        <b>${Math.round(clamp(item.value, 0, 100))}</b>
                    </div>
                `).join("")}
            </div>
        `;
    }

    function buildEvolution(datos, finalScore) {
        const preguntas = Array.isArray(datos.preguntasRealizadas) ? datos.preguntasRealizadas : [];
        if (preguntas.length > 0) {
            let current = 12;
            return preguntas.slice(0, 12).map((item, index) => {
                const gain = number(item.puntaje ?? item.evaluacion?.puntaje, item.correcta ? 10 : 3);
                current = clamp(current + gain, 0, 100);
                const expected = ((index + 1) / preguntas.length) * finalScore;
                return clamp(Math.max(current, expected), 0, 100);
            });
        }

        const totalQuestions = Math.max(number(datos.preguntas, 0), 5);
        return Array.from({ length: Math.min(totalQuestions, 12) }, (_, index) => {
            const ratio = (index + 1) / Math.min(totalQuestions, 12);
            const wave = Math.sin(index * 1.35) * 8;
            return clamp((finalScore * ratio) + wave + 12, 0, 100);
        });
    }

    function renderSingleEvolution(values) {
        const normalized = values.length >= 2 ? values : [0, values[0] || 0];
        return renderLineChart([
            { label: "Evolucion", color: "#8b5cf6", values: normalized }
        ]);
    }

    function ensureExtraCards() {
        const grid = document.querySelector(".report-chart-grid");
        if (!grid) return;

        grid.classList.add("report-chart-grid--visual");
        [
            { id: "chart-pulso", title: "Pulso SAE" },
            { id: "chart-cobertura", title: "Cobertura" },
            { id: "chart-matriz", title: "Matriz visual" },
            { id: "chart-balance", title: "Balance" }
        ].forEach((card) => {
            if (document.getElementById(card.id)) return;
            const article = document.createElement("article");
            article.className = "report-chart-card";
            article.innerHTML = `<header>${card.title}</header><div id="${card.id}" class="chart-slot"></div>`;
            grid.appendChild(article);
        });
    }

    function renderDashboard(datos, options) {
        ensureExtraCards();

        const config = options || {};
        const score = clamp(number(datos.calificacion, number(datos.credibilidad, 0)), 0, 100);
        const correct = number(datos.respuestasCorrectas, number(datos.calificables, 0));
        const total = Math.max(number(datos.totalRespuestas, number(datos.preguntas, 0)), 1);
        const questions = number(datos.preguntas, 0);
        const contradictions = number(datos.contradicciones, 0);
        const maxQuestions = config.nivel === "Experto" ? 30 : 15;
        const correctPct = clamp((correct / total) * 100, 0, 100);
        const questionPct = clamp((questions / maxQuestions) * 100, 0, 100);
        const contradictionPct = clamp((contradictions / 5) * 100, 0, 100);
        const consistencyPct = clamp(100 - contradictionPct, 0, 100);
        const controlPct = clamp((score * 0.46) + (correctPct * 0.24) + (consistencyPct * 0.2) + (questionPct * 0.1), 0, 100);
        const riskPct = clamp((100 - score) * 0.55 + contradictionPct * 0.45, 0, 100);
        const evolutionValues = buildEvolution(datos, score);

        const topbar = document.getElementById("report-dashboard-meta");
        if (topbar) {
            topbar.innerHTML = `
                <span>Rango: <b>${escapeHTML(datos.rango || "--")}</b></span>
                <span>Nivel: <b>${escapeHTML(config.nivel || "SAE")}</b></span>
            `;
        }

        const monthly = document.getElementById("chart-rendimiento");
        if (monthly) {
            monthly.innerHTML = renderLineChart([
                { label: "Rendimiento", color: "#1877f2", values: [score * 0.42, score * 0.58, score * 0.76, score * 0.88, score] },
                { label: "Preguntas", color: "#22c55e", values: [questionPct * 0.38, questionPct * 0.52, questionPct * 0.74, questionPct * 0.9, questionPct] },
                { label: "Contradicciones", color: "#f97316", values: [contradictionPct * 0.25, contradictionPct * 0.55, contradictionPct * 0.7, contradictionPct * 0.84, contradictionPct] }
            ]);
        }

        const bars = document.getElementById("chart-indicadores");
        if (bars) {
            bars.innerHTML = renderBarChart([
                { label: "Calif.", value: score, color: "#1877f2" },
                { label: "Aciertos", value: correctPct, color: "#22c55e" },
                { label: "Preg.", value: questionPct, color: "#f97316" },
                { label: "Contr.", value: contradictionPct, color: "#8b5cf6" }
            ]);
        }

        const pie = document.getElementById("chart-distribucion");
        if (pie) {
            pie.innerHTML = renderPieChart([
                { label: "Aciertos", value: Math.max(correctPct, 1), color: "#22c55e" },
                { label: "Pendiente", value: Math.max(100 - correctPct, 1), color: "#ef4444" },
                { label: "Ritmo", value: Math.max(questionPct, 1), color: "#1877f2" },
                { label: "Analisis", value: Math.max(contradictionPct, 1), color: "#8b5cf6" }
            ]);
        }

        const evolution = document.getElementById("chart-evolucion");
        if (evolution) {
            evolution.innerHTML = renderSingleEvolution(evolutionValues);
        }

        const pulse = document.getElementById("chart-pulso");
        if (pulse) {
            pulse.innerHTML = renderGaugeChart(controlPct, [
                { label: "Acierto", value: correctPct, color: "#22c55e" },
                { label: "Ritmo", value: questionPct, color: "#1877f2" },
                { label: "Control", value: consistencyPct, color: "#8b5cf6" }
            ]);
        }

        const coverage = document.getElementById("chart-cobertura");
        if (coverage) {
            coverage.innerHTML = renderRadarChart([
                { label: "Cal.", value: score, color: "#1877f2" },
                { label: "Aci.", value: correctPct, color: "#22c55e" },
                { label: "Rit.", value: questionPct, color: "#f97316" },
                { label: "Cons.", value: consistencyPct, color: "#8b5cf6" },
                { label: "Ctrl.", value: controlPct, color: "#14b8a6" }
            ]);
        }

        const matrix = document.getElementById("chart-matriz");
        if (matrix) {
            const heatValues = Array.from({ length: 16 }, (_, index) => {
                const current = evolutionValues[index % Math.max(evolutionValues.length, 1)] || score;
                const wave = Math.sin(index * 1.7) * 9;
                const lift = (index % 4) * 4;
                return clamp(current * 0.66 + score * 0.18 + lift + wave - riskPct * 0.12, 0, 100);
            });
            matrix.innerHTML = renderHeatmap(heatValues);
        }

        const balance = document.getElementById("chart-balance");
        if (balance) {
            balance.innerHTML = renderStackChart([
                { label: "Logro", value: score, color: "#1877f2" },
                { label: "Acierto", value: correctPct, color: "#22c55e" },
                { label: "Riesgo", value: riskPct, color: "#ef4444" },
                { label: "Ritmo", value: questionPct, color: "#f97316" }
            ]);
        }
    }

    window.SAERenderReportDashboard = renderDashboard;
})();
