/*	Adam Ip																	2012-11-29
	CRM Lead Form -- Retrieving city, county, state, country 
	    from CRM database table new_zipcodeExtensionBase. 

	cust_countryregion is an option set										2013-01-23		
*/
var DebugModeLeadZipCode = false;   

/****************************************************************************************
    Change event used in Form Lead */
function LeadAddressZipCode_Change()
{
	try
	{
		if( DebugModeLeadZipCode ) 
			window.alert( "function LeadAddressZipCode_Change" );
		var z = myGetValue( "address1_postalcode" );
		if( z != null && z.length > 0 )
		{
			if( DebugModeLeadZipCode ) 
				window.alert( "function LeadAddressZipCode_Change\naddress1_postalcode\t" + z );
			WrapperExtractCityStateFromZip( z, "address1_city", "address1_county", "address1_stateorprovince", "address1_country", "cust_countryregion" ); 
		}
	}	
	catch( err )
	{
		window.alert( "function LeadAddressZipCode_Change error code " + err );
		if( DebugModeLeadZipCode ) 
			window.alert( "1 name " + err.name + "\n2 message\t" + err.message + "\n3 number\t" + err.number + "\n4 prototype\t" + err.prototype  + "\n5 toString\t" + err.toString() );
	}
}

/****************************************************************************************
    Change event used in Form Lead */
function LeadAddressCountryCode_Change()
{
	try
	{
		WrapperExtractCountryFromCountryOptionSet( "address1_country", "cust_countryregion" );
	}	
	catch( err )
	{
		window.alert( "function LeadAddressCountryCode_Change error code " + err );
		if( DebugModeLeadZipCode ) 
			window.alert( "1 name " + err.name + "\n2 message\t" + err.message + "\n3 number\t" + err.number + "\n4 prototype\t" + err.prototype  + "\n5 toString\t" + err.toString() );
	}
}

/* End Of Lines ************************************************************************/

 