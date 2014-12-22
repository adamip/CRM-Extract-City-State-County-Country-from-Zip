/*	Adam Ip																	2012-10-09
	CRM Account Form -- Retrieving city, county, state, country 
	    from CRM database table new_zipcodeExtensionBase.  
	
	new_countryregion is an option set										2013-01-23
*/
var DebugModeAccountZipCode = false;   

/****************************************************************************************
    Change event used in Form Account */
function AccountAddressZipCode_Change()
{
	try
	{
		if( DebugModeAccountZipCode ) 
			window.alert( "function AccountAddressZipCode_Change" );
		var z = myGetValue( "address1_postalcode" );
		if( z != null && z.length > 0 )
		{
			if( DebugModeAccountZipCode ) 
				window.alert( "function AccountAddressZipCode_Change\naddress1_postalcode\t" + z );
			WrapperExtractCityStateFromZip( z, "address1_city", "address1_county", "address1_stateorprovince", "address1_country", "new_countryregion" ); 
		}
	}	
	catch( err )
	{
		window.alert( "function AccountAddressZipCode_Change error code " + err );
		if( DebugModeAccountZipCode ) 
			window.alert( "1 name " + err.name + "\n2 message\t" + err.message + "\n3 number\t" + err.number + "\n4 prototype\t" + err.prototype  + "\n5 toString\t" + err.toString() );
	}
}

/****************************************************************************************
    Change event used in Form Lead */
function AccountAddressCountryCode_Change()
{
	try
	{
		WrapperExtractCountryFromCountryOptionSet( "address1_country", "new_countryregion" );
	}	
	catch( err )
	{
		window.alert( "function AccountAddressCountryCode_Change error code " + err );
		if( DebugModeLeadZipCode ) 
			window.alert( "1 name " + err.name + "\n2 message\t" + err.message + "\n3 number\t" + err.number + "\n4 prototype\t" + err.prototype  + "\n5 toString\t" + err.toString() );
	}
}

/* End Of Lines ************************************************************************/

 