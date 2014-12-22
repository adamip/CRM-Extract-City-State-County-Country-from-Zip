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
		if( DebugModeLeadZipCode ) window.alert( "function LeadAddressZipCode_Change()" );
		var z = myGetValue( "address1_postalcode" );
		if( z != null && z.length > 0 )
		{
			if( DebugModeLeadZipCode ) 
				window.alert( "function LeadAddressZipCode_Change()\naddress1_postalcode\t" + z );
			WrapperExtractCityStateFromZip( z, "address1_city", "address1_county", "address1_stateorprovince", "address1_country", "cust_countryregion" ); 
		}
	}	
	catch( err )
	{
		if( DebugModeLeadZipCode ) window.alert( "function LeadAddressZipCode_Change()\nerr code\t" + err + "\nerr name\t" + err.name + "\nerr message\t" + err.message + "\nerr number\t" + err.number + "\nerr prototype\t" + err.prototype  + "\nerr toString\t" + err.toString());
	}
}

/*****************************************************************************************/
function LeadAddressCountryCode_Change()
{
	try
	{
		if( DebugModeLeadZipCode ) window.alert( "function LeadAddressCountryCode_Change()" );
		WrapperExtractCountryFromCountryOptionSet( "address1_country", "cust_countryregion" );
	}	
	catch( err )
	{
		if( DebugModeLeadZipCode ) window.alert( "function LeadAddressCountryCode_Change()\nerr code\t" + err + "\nerr name\t" + err.name + "\nerr message\t" + err.message + "\nerr number\t" + err.number + "\nerr prototype\t" + err.prototype  + "\nerr toString\t" + err.toString());
	}
}

/*****************************************************************************************/
function LeadAddressCountryCode_OnLoad()
{
	try
	{
		DebugModeLeadZipCode = DebugModeLeadZipCode && AmISoftwareDeveloper();
		if( DebugModeLeadZipCode ) window.alert( "function LeadAddressCountryCode_OnLoad()" );
		WrapperExtractCountryFromCountryOptionSet( "address1_country", "cust_countryregion" );
	}	
	catch( err )
	{
		if( DebugModeLeadZipCode ) window.alert( "function LeadAddressCountryCode_OnLoad()\nerr code\t" + err + "\nerr name\t" + err.name + "\nerr message\t" + err.message + "\nerr number\t" + err.number + "\nerr prototype\t" + err.prototype  + "\nerr toString\t" + err.toString());
	}
}

/* End Of Lines ************************************************************************/

 