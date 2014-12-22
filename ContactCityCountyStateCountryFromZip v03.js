/*	Adam Ip																	2012-10-09
	CRM Contact Form -- Retrieving city, county, state, country 
	    from CRM database table new_zipcodeExtensionBase.  
		
	cust_countryregion is an option set										2013-01-23
*/
var DebugModeContactZipCode = false;   

/****************************************************************************************
    Change event used in Form Contact */
function ContactAddressZipCode_Change()
{
	try
	{
		if( DebugModeContactZipCode ) 
			window.alert( "function ContactAddressZipCode_Change" );
		var z = myGetValue( "address1_postalcode" );
		if( z != null && z.length > 0 )
		{
			if( DebugModeContactZipCode ) 
				window.alert( "function ContactAddressZipCode_Change\naddress1_postalcode\t" + z );
			WrapperExtractCityStateFromZip( z, "address1_city", "address1_county", "address1_stateorprovince", "address1_country", "cust_countryregion" ); 
		}
	}	
	catch( err )
	{
		window.alert( "function ContactAddressZipCode_Change error code " + err );
		if( DebugModeContactZipCode ) 
			window.alert( "1 name " + err.name + "\n2 message\t" + err.message + "\n3 number\t" + err.number + "\n4 prototype\t" + err.prototype  + "\n5 toString\t" + err.toString() );
	}
}

/****************************************************************************************
    Change event used in Form Lead */
function ContactAddressCountryCode_Change()
{
	try
	{
		WrapperExtractCountryFromCountryOptionSet( "address1_country", "cust_countryregion" );
	}	
	catch( err )
	{
		window.alert( "function ContactAddressCountryCode_Change error code " + err );
		if( DebugModeLeadZipCode ) 
			window.alert( "1 name " + err.name + "\n2 message\t" + err.message + "\n3 number\t" + err.number + "\n4 prototype\t" + err.prototype  + "\n5 toString\t" + err.toString() );
	}
}

/* End Of Lines ************************************************************************/

 