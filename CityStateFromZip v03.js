/*	Adam Ip																	2012-10-09

	A module that retrieves city, county, state, country 
	    from CRM database table new_zipcodeExtensionBase
		
	Entry point is function WrapperExtractCityStateFromZip( sZip, sCity, sCounty, sState, sCountry )
		sZip is a zip code string
		The other four strings are labels  of the data field to be updated
*/
var sLabelCity, sLabelCounty, sLabelState, sLabelCountry;
var DebugModeZipCode = false;   

/****************************************************************************************
    Change event used in a Form */
function WrapperExtractCityStateFromZip( sZip, sCity, sCounty, sState, sCountry ) 
{
	try
	{
		if( DebugModeZipCode ) 
			window.alert( "function WrapperExtractCityStateFromZip" );
		if( sZip != null && sZip.length > 0 )
		{
			sLabelCity = sCity; 
			sLabelCounty = sCounty; 
			sLabelState = sState; 
			sLabelCountry = sCountry;
			ExtractCityStateFromZip( sZip );	
		}
	}
	catch( err )
	{
		if( DebugModeZipCode ) window.alert( "function WrapperExtractCityStateFromZip error code " + err );
	}
}

/****************************************************************************************/
function setFormAddressInfo( city, county, state_or_province, country )
{
	try
	{
		if( DebugModeZipCode ) 
			window.alert( "function setFormAddressInfo\ncity\t" + city + "\ncounty\t" + county + "\nstate or province\t" + state_or_province + "\ncountry\t" + country );
		if( sLabelCity != null && sLabelCity.length > 0 ) 
			mySetValue( sLabelCity, city );
		if( sLabelCounty != null && sLabelCounty.length > 0 ) 
			mySetValue( sLabelCounty, county );
		if( sLabelState != null && sLabelState.length > 0 ) 
			mySetValue( sLabelState, state_or_province );
		if( sLabelCountry != null && sLabelCountry.length > 0 ) 
			mySetValue( sLabelCountry, country );
	}
	catch( err )
	{
		if( DebugModeZipCode ) window.alert( "function setFormAddressInfo error code " + err );
	}
}

/****************************************************************************************/
function ProcessReturnedEntities( oData )
{
	try
	{
		if( DebugModeZipCode ) 
			window.alert( "function ProcessReturnedEntities\noData\t" + oData );
		if( oData != null && oData[0] != null )
			setFormAddressInfo( oData[0].new_city, oData[0].new_county, oData[0].new_state, oData[0].new_countryregionid );
	}
	catch( err )
	{
		if( DebugModeZipCode ) window.alert( "function ProcessReturnedEntities error code " + err );
	}
}

/****************************************************************************************
function ProcessReturnedEntity( oData )
{
	try
	{
		if( DebugModeZipCode ) 
			window.alert( "function ProcessReturnedEntity\noData\t" + oData );
		if( DebugModeZipCode ) 
			window.alert( "function ProcessReturnedEntity\noData.new_city\t" + oData.new_city + "\noData.new_state\t" + oData.new_state );
	}
	catch( err )
	{
		if( DebugModeZipCode ) window.alert( "function ProcessReturnedEntity error code " + err );
	}
}
*/

/****************************************************************************************/
function ExtractCityStateFromZip( sTarget )
{
	try
	{
		if( DebugModeZipCode ) 
			window.alert( "function ExtractCityStateFromZip\nsTarget\t" + sTarget );
		if( sTarget != null && sTarget.length > 0 )
		{
			var ODataSelect = "https://crm.adtech.net/Production/xrmservices/2011/OrganizationData.svc/new_zipcodeSet?$select=new_city,new_countryregionid,new_county,new_state,new_ZipCode&$filter=new_ZipCode eq '" + sTarget + "'";
			if( DebugModeZipCode )
				window.alert( "function getOpportunityPartner\n\nODataSelect\n" + ODataSelect );				
			$.ajax(	{
				type: "GET",
				contentType: "application/json; charset=utf-8",
				datatype: "json",
				url: ODataSelect,
				beforeSend: function (XMLHttpRequest) { XMLHttpRequest.setRequestHeader( "Accept", "application/json" ); },
				success: function (data, textStatus, XmlHttpRequest)
					{
						// Navigate objects
						//NavigateObjects( data.d.results );

						/* Use only one of these two methods */

						// Use for a selection that may return multiple entities
						ProcessReturnedEntities( data.d.results );

						// Use for a single selected entity
						// ProcessReturnedEntity( data.d );
									
					},
				error: function (XmlHttpRequest, textStatus, errorThrown) { alert( 'OData Select Failed: ' + ODataSelect); }
				}  	);
		}
	}
	catch( err )
	{
		if( DebugModeZipCode ) window.alert( "function ExtractCityStateFromZip error code " + err );
	}
}

/* End Of Lines ************************************************************************/

 