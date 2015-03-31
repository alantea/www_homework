<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
<html>
	<head>
		<style>
		.sport {
			border: 1px double black;
		}

		.sport td{
			border: 1px double black;
			text-align: center;
		}
		</style>
	</head>
	<body>
		<center>
		<table class="sport">
			<xsl:for-each select="mixedteams/football">
			<xsl:variable name="color"><xsl:value-of select="Color"/></xsl:variable>
			<xsl:variable name="image"><xsl:value-of select="Image"/></xsl:variable>
			<xsl:variable name="url"><xsl:value-of select="video"/></xsl:variable>
			<tr>
				<td colspan="6" style="color: {$color};">
					<h1><xsl:value-of select="Team"/></h1>
				</td>
			</tr>
			<tr style="font-weight: bold;background: {$color};">
				<td style="width: 20%">
					<img height="75" style="padding:10px;" src="{$image}" />
				</td>
				<td style="width: 20%">
					<xsl:value-of select="Striker/name"/>
				</td>
				<td style="width: 10%">
					<xsl:value-of select="Striker/age"/>
				</td>
				<td style="width: 10%">
					<xsl:value-of select="Striker/squadnum"/>
				</td>
				<td style="width: 20%">
					<xsl:value-of select="Manager"/>
				</td>
				<td style="width: 20%">
					<xsl:value-of select="Stadium"/>
				</td>
			</tr>
			<tr>
				<td colspan="6">
					<iframe width="696" height="521" src="{$url}" frameborder="0">
					</iframe>
				</td>
			</tr>
			</xsl:for-each>
		</table>
		</center>
	</body>
</html>
</xsl:template>
</xsl:stylesheet>
