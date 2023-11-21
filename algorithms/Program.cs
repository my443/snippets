using System.Globalization;

namespace MyProgram
{

    class Program
    {
        static void Main()
        {
            Console.WriteLine("This is my first VSCode C# program");
            Console.WriteLine("\nMaximum Pairwise Algorithm.\nGiven an array of integers,\nwhat is the maximum value that you can get by multiplying two different elements of the array.");
            int[] numbers = new int[5] { 1, 5, 7, 2, 3 };

            int largest = numbers[0];
            int secondlargest = 0;

            foreach (int number in numbers)
            {
                if (number >= largest)
                {
                    secondlargest = largest;
                    largest = number;
                };
            }

            Console.WriteLine("Largest: " + largest.ToString() + " Second largest: " + secondlargest.ToString());
            Console.WriteLine("Mutiplication: " + (largest * secondlargest).ToString());
        }
    }

}