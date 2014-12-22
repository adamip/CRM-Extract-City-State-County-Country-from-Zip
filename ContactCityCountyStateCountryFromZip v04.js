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
		if( DebugModeContactZipCode ) window.alert( "function ContactAddressZipCode_Change()" );
		var z = myGetValue( "address1_postalcode" );
		if( z != null && z.length > 0 )
		{
			if( DebugModeContactZipCode ) 
				window.alert( "function ContactAddressZipCode_Change()\naddress1_postalcode\t" + z );
			WrapperExtractCityStateFromZip( z, "address1_city", "address1_county", "address1_stateorprovince", "address1_country", "cust_countryregion" ); 
		}
	}	
	catch( err )
	{
		if( DebugModeContactZipCode ) window.alert( "function ContactAddressZipCode_Change()\nerr code\t" + err + "\nerr name\t" + err.name + "\nerr message\t" + err.message + "\nerr number\t" + err.number + "\nerr prototype\t" + err.prototype  + "\nerr toString\t" + err.toString());
	}
}

/*****************************************************************************************/
function ContactAddressCountryCode_Change()
{
	try
	{
		if( DebugModeContactZipCode ) window.alert( "function ContactAddressCountryCode_Change()" );
		WrapperExtractCountryFromCountryOptionSet( "address1_country", "cust_countryregion" );
	}	
	catch( err )
	{
		if( DebugModeContactZipCode ) window.alert( "function ContactAddressCountryCode_Change()\nerr code\t" + err + "\nerr name\t" + err.name + "\nerr message\t" + err.message + "\nerr number\t" + err.number + "\nerr prototype\t" + err.prototype  + "\nerr toString\t" + err.toString());
	}
}

/****************************************************************************************
   Entry Point
*/
function ContactAddressCountryCode_OnLoad()
{
	try
	{
		DebugModeContactZipCode = DebugModeContactZipCode && AmISoftwareDeveloper();
		if( DebugModeContactZipCode ) window.alert( "function ContactAddressCountryCode_OnLoad()" );
		WrapperExtractCountryFromCountryOptionSet( "address1_country", "cust_countryregion" );
	}	
	catch( err )
	{
		if( DebugModeContactZipCode ) window.alert( "function ContactAddressCountryCode_OnLoad()\nerr code\t" + err + "\nerr name\t" + err.name + "\nerr message\t" + err.message + "\nerr number\t" + err.number + "\nerr prototype\t" + err.prototype  + "\nerr toString\t" + err.toString());
	}
}

/* End Of Lines ************************************************************************/

 