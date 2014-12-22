/*	Adam Ip																	2012-10-09

	A module that retrieves city, county, state, country 
	    from CRM database table new_zipcodeExtensionBase
		
	Entry point is function WrapperExtractCityStateFromZip( sZip, sCity, sCounty, sState, sCountry )
		sZip is a zip code string
		The other four strings are labels  of the data field to be updated
		sCity, sCounty, sState, sCountry are text data fields 
		
	oCountry changes from a simple text field to a global option set  		2013-01-23	
		sCountry is a global option set	
		Country returns as a two leter abbreivation.  For examples, UK United Kingdon, SG Singapore
		Country Code = 832090000 + 100 * ascii code of 1st char - 64 + ascii code of 2nd char - 64 
		For examples UK = 832090000 + 2100 + 11
					US = 832090000 + 2100 + 19
					HK = 832090000 + 800 + 11
					FR = 832090000 + 600 + 18
					DE = 832090000 + 400 + 5
					
	WrapperExtractCountryFromCountryOptionSet()								2013-01-31				
*/
var sLabelCity, sLabelCounty, sLabelState, sLabelCountry, oLabelCountry;	/* Global variables */
var DebugModeZipCode = false;   

/****************************************************************************************
    Change event used in a Form */
function WrapperExtractCityStateFromZip( sZip, sCity, sCounty, sState, sCountry, oCountry ) 
{
	try
	{
		DebugModeZipCode = DebugModeZipCode && AmISoftwareDeveloper();
		if( DebugModeZipCode ) window.alert( "function WrapperExtractCityStateFromZip()" );
		if( sZip != null && sZip.length > 0 )
		{
			sLabelCity = sCity; 		/* Save to a global variable */
			sLabelCounty = sCounty; 	/* Save to a global variable */
			sLabelState = sState; 		/* Save to a global variable */
			sLabelCountry = sCountry;	/* Save to a global variable */
			oLabelCountry = oCountry;	/* Save to a global variable */
			ExtractCityStateFromZip( sZip );	
		}
	}
	catch( err )
	{
		if( DebugModeZipCode ) window.alert( "function WrapperExtractCityStateFromZip()\nerr code\t" + err + "\nerr name\t" + err.name + "\nerr message\t" + err.message + "\nerr number\t" + err.number + "\nerr prototype\t" + err.prototype  + "\nerr toString\t" + err.toString());
	}
}

/****************************************************************************************/
function setFormAddressInfo( city, county, state_or_province, country )
{
	try
	{
		if( DebugModeZipCode ) window.alert( "function setFormAddressInfo()\ncity\t" + city + "\ncounty\t" + county + "\nstate or province\t" + state_or_province + "\ncountry\t" + country );
		if( sLabelCity != null && sLabelCity.length > 0 ) 
			mySetValue( sLabelCity, city );
		if( sLabelCounty != null && sLabelCounty.length > 0 ) 
			mySetValue( sLabelCounty, county );
		if( sLabelState != null && sLabelState.length > 0 ) 
			mySetValue( sLabelState, state_or_province );
		if( sLabelCountry != null && sLabelCountry.length > 0 ) 
			mySetValue( sLabelCountry, country );
		if( oLabelCountry != null && oLabelCountry.length > 0 && country != null && country.length > 1 ) 
		{
			var CountryCode = 832090000 + 100 * country.charCodeAt(0) + country.charCodeAt(1) - 6464;
			if( DebugModeZipCode ) 
				window.alert( "function setFormAddressInfo()\ncountry.charCodeAt(0) " + country.charCodeAt(0) + "\ncountry.charCodeAt(1) " + country.charCodeAt(1) + "\noLabelCountry " + oLabelCountry + "\nCountryCode " + CountryCode );
			mySetValue( oLabelCountry, CountryCode );
		}
	}
	catch( err )
	{
		if( DebugModeZipCode ) window.alert( "function setFormAddressInfo()\nerr code\t" + err + "\nerr name\t" + err.name + "\nerr message\t" + err.message + "\nerr number\t" + err.number + "\nerr prototype\t" + err.prototype  + "\nerr toString\t" + err.toString());
	}
}

/****************************************************************************************
	sCountry - Label of country code text field; output
	oCountry - Label of country code option set field; input
*/
function WrapperExtractCountryFromCountryOptionSet( sCountry, oCountry )
{
	try
	{
		if( DebugModeZipCode ) window.alert( "function WrapperExtractCountryFromCountryOptionSet()" );
		var iCountry = myGetValue( oCountry ) - 832090000 + 6464;
		if( DebugModeZipCode ) 
			window.alert( "function WrapperExtractCountryFromCountryOptionSet\niCountry = " + iCountry + "\nMath.floor( iCountry / 100 ) = " + Math.floor( iCountry / 100 ) + "\niCountry % 100 = " + iCountry % 100 );
		mySetValue( sCountry, String.fromCharCode( Math.floor( iCountry / 100 ), iCountry % 100 ));
	}
	catch( err )
	{
		if( DebugModeZipCode ) window.alert( "function WrapperExtractCountryFromCountryOptionSet()\nerr code\t" + err + "\nerr name\t" + err.name + "\nerr message\t" + err.message + "\nerr number\t" + err.number + "\nerr prototype\t" + err.prototype  + "\nerr toString\t" + err.toString());
	}
}

/****************************************************************************************/
function ProcessReturnedEntitiesCSfZ( oData )
{
	try
	{
		if( DebugModeZipCode ) window.alert( "function ProcessReturnedEntitiesCSfZ()\noData\t" + oData );
		if( oData != null && oData[0] != null )
			setFormAddressInfo( oData[0].new_city, oData[0].new_county, oData[0].new_state, oData[0].new_countryregionid );
	}
	catch( err )
	{
		if( DebugModeZipCode ) window.alert( "function ProcessReturnedEntitiesCSfZ()\nerr code\t" + err + "\nerr name\t" + err.name + "\nerr message\t" + err.message + "\nerr number\t" + err.number + "\nerr prototype\t" + err.prototype  + "\nerr toString\t" + err.toString());
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
		if( DebugModeZipCode ) window.alert( "function ExtractCityStateFromZip\nsTarget\t" + sTarget );
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
						ProcessReturnedEntitiesCSfZ( data.d.results );

						// Use for a single selected entity
						// ProcessReturnedEntity( data.d );
									
					},
				error: function (XmlHttpRequest, textStatus, errorThrown) { alert( 'OData Select Failed: ' + ODataSelect); }
				}  	);
		}
	}
	catch( err )
	{
		if( DebugModeZipCode ) window.alert( "function ExtractCityStateFromZip()\nerr code\t" + err + "\nerr name\t" + err.name + "\nerr message\t" + err.message + "\nerr number\t" + err.number + "\nerr prototype\t" + err.prototype  + "\nerr toString\t" + err.toString());
	}
}

/* End Of Lines ************************************************************************/

 