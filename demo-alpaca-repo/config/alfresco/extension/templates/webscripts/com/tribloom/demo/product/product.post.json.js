<import resource="classpath:alfresco/templates/webscripts/org/alfresco/repository/requestutils.lib.js">

function main() {
	var scriptNode = getRequestNode();
	if (scriptNode == null) {
		status.setCode(
			status.STATUS_NOT_FOUND,
			"Unable to find node"
		);
		return;
	}
	if (!scriptNode.hasPermission("Write")) {
		status.setCode(
			status.STATUS_UNAUTHORIZED,
			"Unauthorized to modify this product"
		);
	}
	scriptNode.content = json;
	status.setCode(
		status.STATUS_ACCEPTED,
		"Product updated"
	);
}

main();