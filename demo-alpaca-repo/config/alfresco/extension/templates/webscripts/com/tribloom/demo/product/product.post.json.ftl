{
	"success" : <#if success?exists>${success?string}<#else>false</#if>,
	"nodeRef" : <#if nodeRef?exists>"${nodeRef}"<#else>null</#if>
}