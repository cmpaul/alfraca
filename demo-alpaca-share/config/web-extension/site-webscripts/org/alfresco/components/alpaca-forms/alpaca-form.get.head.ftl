<script type="text/javascript" src="${page.url.context}/res/alpaca/js/jquery/js/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="${page.url.context}/res/alpaca/js/jquery/js/jquery-ui-1.8.18.custom.min.js"></script>

<!-- Data table -->
<script type="text/javascript"
        src="${page.url.context}/res/alpaca/js/datatables/jquery.dataTables.1.8.1-min.js"></script>
<script type="text/javascript" src="${page.url.context}/res/alpaca/js/datatables/TableTools.2.0.1-min.js"></script>

<!-- Tree -->
<script type="text/javascript" src="${page.url.context}/res/alpaca/js/dynatree/jquery.dynatree.1.2.0-min.js"></script>
<script type="text/javascript" src="${page.url.context}/res/alpaca/js/dynatree/jquery.cookie-min.js"></script>
<script type="text/javascript" src="${page.url.context}/res/alpaca/js/blockui/jquery.blockui.2.39-min.js"></script>

<!-- Alpaca JS -->
<script type="text/javascript" src="${page.url.context}/res/alpaca/js/alpaca-1.0.0-SNAPSHOT-min.js"></script>
<script type="text/javascript" src="${page.url.context}/res/alpaca/js_src/AlpacaForms.js"></script>
<script type="text/javascript" src="${page.url.context}/res/alpaca/js_src/fields/ProductField.js"></script>
<script type="text/javascript" src="${page.url.context}/res/alpaca/js_src/schema/ProductSchema.js"></script>

<!-- Alpaca CSS -->
<link type="text/css" href="${page.url.context}/res/alpaca/css/example.css" rel="stylesheet"/>
<link type="text/css" href="${page.url.context}/res/alpaca/css/alpaca-1.0.0-SNAPSHOT.min.css" rel="stylesheet"/>
<link type="text/css" href="${page.url.context}/res/alpaca/css/tables.css" rel="stylesheet"/>
<link type="text/css" href="${page.url.context}/res/alpaca/css/alpaca-demo.css" rel="stylesheet"/>
<link type="text/css" href="${page.url.context}/res/alpaca/js/jquery/css/smoothness/jquery-ui-1.8.18.custom.css" rel="stylesheet">
<link type="text/css" href="${page.url.context}/res/alpaca/js/dynatree/css/skin/ui.dynatree.css" rel="stylesheet"/>

<#if config.global.forms?exists && config.global.forms.dependencies?exists && config.global.forms.dependencies.js?exists>
<#list config.global.forms.dependencies.js as jsFile>
<script type="text/javascript" src="${page.url.context}/res${jsFile}"></script>
</#list>
</#if>
