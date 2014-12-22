/* CRM Initializing OptionSet Country Codes */
Use Productions_MSCRM;

select value, substring(value,1,1), substring(value,2,1), 
	ascii(substring(value,1,1))-64, ascii(substring(value,2,1))-64, 
	attributevalue from stringmapbase
where attributename like '%cust_countryregion%';

update stringmapbase
set attributevalue = 832090000 + (ascii(substring(value,1,1)))*100 + ascii(substring(value,2,1)) - 6464
where attributename like '%cust_countryregion%';

/*************************************************************************************************************
	Lead */
USE Productions_MSCRM;
SELECT A.ParentID, E.LeadID, A.Line1, A.City, A.PostalCode, A.Country, E.cust_CountryRegion
	/* , 832090000 + ASCII(SUBSTRING(Country, 1, 1)) * 100 + ASCII(SUBSTRING(Country, 2, 1)) - 6464 AS oCountry */
FROM LeadAddressBase A, LeadExtensionBase E 
WHERE A.ParentID = E.LeadID
	AND A.Country IS NOT NULL
	AND LEN(A.Country) > 0
	AND E.cust_CountryRegion IS NULL
	ORDER BY A.Country;
	
UPDATE LeadAddressBase
SET COUNTRY = 'UK'
FROM LeadAddressBase A 
WHERE A.Country LIKE 'UK' or A.Country LIKE '%ENGLAND%' or A.Country LIKE '%United Kingdom%' ;

UPDATE LeadExtensionBase
SET cust_CountryRegion = 832090000 + ASCII(SUBSTRING(Country, 1, 1)) * 100 + ASCII(SUBSTRING(Country, 2, 1)) - 6464
FROM LeadAddressBase A, LeadExtensionBase E 
WHERE A.ParentID = E.LeadID
	AND E.cust_CountryRegion IS NULL
	AND A.Country LIKE 'UK';
	
/*************************************************************************************************************
	Contact */	
USE Productions_MSCRM;
SELECT A.ParentID, B.ContactID, A.Line1, A.City, A.PostalCode, A.Country, B.cust_CountryRegion
FROM CustomerAddressBase A, ContactExtensionBase B 
WHERE A.ParentID = B.ContactID
	AND A.Country IS NOT NULL
	AND LEN(A.Country) > 0
	AND B.cust_CountryRegion IS NULL
	ORDER BY A.Country;

UPDATE CustomerAddressBase
SET COUNTRY = 'US'
FROM CustomerAddressBase 
WHERE Country LIKE 'USA' 
	OR Country LIKE 'USDA' 
	OR Country LIKE 'USAUS' 
	OR Country LIKE 'U.S.' 
	OR Country LIKE 'United States' 
	OR Country LIKE '%United States of america%';
	
UPDATE CustomerAddressBase
SET COUNTRY = 'UK'
FROM CustomerAddressBase 
WHERE Country LIKE 'United Kingdom' 
	OR Country LIKE 'England' 
	OR Country LIKE 'GB' 
	OR Country LIKE 'Great Britian' 
	OR Country LIKE 'Scotland';

UPDATE ContactExtensionBase
SET cust_CountryRegion = 832090000 + ASCII(SUBSTRING(Country, 1, 1)) * 100 + ASCII(SUBSTRING(Country, 2, 1)) - 6464
FROM CustomerAddressBase A, ContactExtensionBase B  
WHERE A.ParentID = B.ContactID
	AND B.cust_CountryRegion IS NULL
	AND A.Country LIKE 'US'; 
	
/*************************************************************************************************************
	Account */ 	
USE Productions_MSCRM;
SELECT A.ParentID, EB.AccountID, A.Line1, A.City, A.PostalCode, A.Country, EB.new_CountryRegion
FROM CustomerAddressBase A, AccountExtensionBase EB 
WHERE A.ParentID = EB.AccountID
	AND A.Country IS NOT NULL
	AND LEN(A.Country) > 0
	AND EB.new_CountryRegion IS NULL
	ORDER BY A.Country;
	
UPDATE CustomerAddressBase
SET COUNTRY = 'TR'
FROM CustomerAddressBase 
WHERE Country LIKE 'turkey';

UPDATE AccountExtensionBase
SET new_CountryRegion = 832090000 + ASCII(SUBSTRING(Country, 1, 1)) * 100 + ASCII(SUBSTRING(Country, 2, 1)) - 6464
FROM CustomerAddressBase A, AccountExtensionBase EB  
WHERE A.ParentID = EB.AccountID
	AND EB.new_CountryRegion IS NULL
	AND (A.Country LIKE 'TR' OR A.Country LIKE 'ZA' OR A.Country LIKE 'US' ); 
	