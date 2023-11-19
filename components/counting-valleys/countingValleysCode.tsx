export function getCountingValleysCode(): string {
  let code = countingValleysCode.trim();
  if (code[0]==="\n") 
    code = code.substring(1)
  return code;
}

const countingValleysCode = `
using System;

public class Solution 
{
  public static int CountingValleys(string path)
  {
    // please provide the solution HERE
    return 0;
  }
}

#region Test Engine
public class Tester
{
  public static void Run()
  {
    TestCase("", 0);
    TestCase("UD", 0);
    TestCase("UDUD", 0);
    TestCase("DU", 1);
    TestCase("DDUU", 1);
    TestCase("DUDU", 2);
  }

  private static void TestCase(string path, int valleys)
  {
    var actual = Solution.CountingValleys(path);
    if (actual == valleys)
    {
      Console.WriteLine($"✅ \\"{path}\\"  valleys:{actual}");
    } else {
      Console.WriteLine($"❌ \\"{path}\\"  valleys:{actual},  but expected:{valleys}");
    }
  }
}

public class Program
{
  public static void Main()
  {
    Tester.Run();
  }
}
#endregion
`;