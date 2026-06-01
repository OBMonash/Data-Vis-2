window.addEventListener('DOMContentLoaded', function() {
    var vg_1 = "Chorepleth.json"
    vegaEmbed("#chorepleth_map", vg_1).then(function(result) {
        // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);

    var vg_2 = "exp.json"
    vegaEmbed("#grouped_lollipop_w", vg_2).then(function(result) {
        // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);

    var vg_3 = "exp2.json"
    vegaEmbed("#grouped_lollipop_m", vg_3).then(function(result) {
        // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);

    var vg_4 = "pie_aus.json"
    vegaEmbed("#pie_aus", vg_4).then(function(result) {
        // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);

    var vg_5 = "pie_ger.json"
    vegaEmbed("#pie_ger", vg_5).then(function(result) {
        // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);

    var vg_6 = "pie_ind.json"
    vegaEmbed("#pie_ind", vg_6).then(function(result) {
        // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);

    var vg_7 = "pie_rus.json"
    vegaEmbed("#pie_rus", vg_7).then(function(result) {
        // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);

    var vg_8 = "pie_usa.json"
    vegaEmbed("#pie_usa", vg_8).then(function(result) {
        // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);

    var vg_9 = "scatterplot.json"
    vegaEmbed("#scatterplot", vg_9).then(function(result) {
        // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);
});
