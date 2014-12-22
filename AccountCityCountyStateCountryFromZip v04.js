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
		if( DebugModeAccountZipCode ) window.alert( "function AccountAddressZipCode_Change()" );
		var z = myGetValue( "address1_postalcode" );
		if( z != null && z.length > 0 )
		{
			if( DebugModeAccountZipCode ) 
				window.alert( "function AccountAddressZipCode_Change()\naddress1_postalcode\t" + z );
			WrapperExtractCityStateFromZip( z, "address1_city", "address1_county", "address1_stateorprovince", "address1_country", "new_countryregion" ); 
		}
	}	
	catch( err )
	{
		if( DebugModeAccountZipCode ) window.alert( "function AccountAddressZipCode_Change()\nerr code\t" + err + "\nerr name\t" + err.name + "\nerr message\t" + err.message + "\nerr number\t" + err.number + "\nerr prototype\t" + err.prototype  + "\nerr toString\t" + err.toString());
	}
}

/*****************************************************************************************/
function AccountAddressCountryCode_Change()
{
	try
	{
		if( DebugModeAccountZipCode ) window.alert( "function AccountAddressCountryCode_Change()" );
		WrapperExtractCountryFromCountryOptionSet( "address1_country", "new_countryregion" );
	}	
	catch( err )
	{
		if( DebugModeAccountZipCode ) window.alert( "function AccountAddressCountryCode_Change()\nerr code\t" + err + "\nerr name\t" + err.name + "\nerr message\t" + err.message + "\nerr number\t" + err.number + "\nerr prototype\t" + err.prototype  + "\nerr toString\t" + err.toString());
	}
}

/****************************************************************************************
    Entry Point
*/
function AccountAddressCountryCode_OnLoad()
{
	try
	{
		DebugModeAccountZipCode = DebugModeAccountZipCode && AmISoftwareDeveloper();
		if( DebugModeAccountZipCode ) window.alert( "function AccountAddressCountryCode_OnLoad()" );
		WrapperExtractCountryFromCountryOptionSet( "address1_country", "new_countryregion" );
	}	
	catch( err )
	{
		if( DebugModeAccountZipCode ) window.alert( "function AccountAddressCountryCode_OnLoad()\nerr code\t" + err + "\nerr name\t" + err.name + "\nerr message\t" + err.message + "\nerr number\t" + err.number + "\nerr prototype\t" + err.prototype  + "\nerr toString\t" + err.toString());
	}
}
/* End Of Lines ************************************************************************/

 