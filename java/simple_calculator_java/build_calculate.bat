:: Commands to build the Calculate.java code into a jar
:: First compile the code.

javac Calculate.java

:: Then create the .jar file. 
:: The jar command creates the archive. 
:: The MF file must define the entry point. Make sure that you end the MF file with a empty linebreak
jar cfm Calculate.jar Calculate.MF Calculate.class

::You can then run the code with java -jar Calculate.jar