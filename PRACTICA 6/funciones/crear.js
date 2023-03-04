function WriteFile()
{
   var fso  = new ActiveXObject("Scripting.FileSystemObject");
   var fh = fso.CreateTextFile("Test.txt", true);
   fh.WriteLine(miCadenaDeTexto);
   fh.Close();
}
