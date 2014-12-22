/*	Adam Ip																	2012-10-09
	CRM Contact Form -- Retrieving city, county, state, country 
	    from CRM database table new_zipcodeExtensionBase.

	cust_countryregion is an option set										2013-01-23		
*/
var DebugModeSiteZipCode = false;   

/****************************************************************************************
    Change event used in Form Contact */
function SiteAddressZipCode_Change()
{
	try
	{
		if( DebugModeSiteZipCode ) 
			window.alert( "function SiteAddressZipCode_Change" );
		var z = myGetValue( "new_zippostalcode" );
		if( z != null && z.length > 0 )
		{
			if( DebugModeSiteZipCode ) 
				window.alert( "function SiteAddressZipCode_Change\nnew_zippostalcode\t" + z );
			WrapperExtractCityStateFromZip( z, "new_city", "new_county", "new_stateprovince", "new_countryregion", "new_ocountryregion" ); 
		}
	}	
	catch( err )
	{
		window.alert( "function SiteAddressZipCode_Change error code " + err );
		if( DebugModeSiteZipCode ) 
			window.alert( "1 name " + err.name + "\n2 message\t" + err.message + "\n3 number\t" + err.number + "\n4 prototype\t" + err.prototype  + "\n5 toString\t" + err.toString() );
	}
}

/* End Of Lines ************************************************************************/
