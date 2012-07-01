function main() {
	model.success = false;
	
	var nodeRef = url.templateArgs['storeType'] + "://" 
				+ url.templateArgs['storeId'] + "/" 
				+ url.templateArgs['nodeId'];
	
	var scriptNode = search.findNode(nodeRef);
	
	if (scriptNode == null) {
		status.code = 500;
		status.message = "Unable to find node for nodeRef " + nodeRef;
		return;
	}
	
	scriptNode.content = json;
	
	model.success = true;
	model.nodeRef = nodeRef;
}

main();