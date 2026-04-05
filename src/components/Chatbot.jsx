import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

// ─── Suggestion chips ───────────────────────────────────────────────────────
const SUGGESTIONS = [
  "What is a Pointer?",
  "Explain malloc()",
  "How does struct work?",
  "What is recursion?",
  "Explain for loop",
  "What are arrays?",
  "Explain functions in C",
  "What are data types?",
  "How do strings work?",
  "What is a typedef?",
  "Explain enums",
  "What is a union?",
  "File I/O in C",
  "Preprocessor macros",
  "Operators in C",
  "What are variables?",
  "If else in C",
  "Switch statement",
  "Scope of variables",
  "Type casting in C",
  "What is stack vs heap?",
  "Memory leak in C",
  "Bitwise operators",
  "Command line arguments",
  "Function pointers",
  "Linked list in C",
  "Sorting in C",
  "printf and scanf",
  "Header files in C",
  "How to compile C?",
  "const keyword",
  "goto statement",
  "Error handling in C",
  "Math functions in C",
  "Static keyword",
  "Global variables",
  "Pass by reference",
  "2D arrays",
  "String formatting",
];

// ─── Static knowledge base ──────────────────────────────────────────────────
const KB = [
  {
    keys: ["hello world", "hello", "first program", "basic program", "get started"],
    title: "Hello World — Your First C Program",
    html: `<strong class="kw">Every C program</strong> starts with <code class="ic">main()</code>. Here's the classic first program:\n\n<pre class="cb">#include &lt;stdio.h&gt;   // standard I/O library\n\nint main() {\n    printf("Hello, World!\\n");  // print to console\n    return 0;  // 0 = success\n}</pre>\n<strong class="kw">Compile &amp; run:</strong>\n<pre class="cb">gcc hello.c -o hello   // compile\n./hello                // run → Hello, World!</pre>\n<strong class="kw">Key points:</strong><br/>• <code class="ic">#include &lt;stdio.h&gt;</code> gives you <code class="ic">printf</code> and <code class="ic">scanf</code><br/>• Every statement ends with <code class="ic">;</code><br/>• <code class="ic">\\n</code> is a newline character<br/>• <code class="ic">main</code> must return an <code class="ic">int</code>`,
  },
  {
    keys: ["pointer", "pointers", "ptr", "dereference", "address", "null pointer"],
    title: "Pointers in C",
    html: `<strong class="kw">Pointers</strong> store the memory address of another variable. They are one of C's most powerful features.<br/><br/><strong class="kw">Declaration:</strong> <code class="ic">type *name;</code><br/><strong class="kw">Address-of operator:</strong> <code class="ic">&amp;</code> — gets a variable's address<br/><strong class="kw">Dereference operator:</strong> <code class="ic">*</code> — accesses the value at an address\n\n<pre class="cb">#include &lt;stdio.h&gt;\nint main() {\n    int x = 10;\n    int *p = &amp;x;   // p holds address of x\n\n    printf("Value:   %d\\n", *p);  // 10\n    printf("Address: %p\\n",  p);  // memory address\n\n    *p = 99;       // modify x through the pointer\n    printf("x is now: %d\\n", x); // 99\n    return 0;\n}</pre>\n<strong class="kw">Key rules:</strong> Always initialise pointers before use. A <em>null pointer</em> (<code class="ic">NULL</code>) points to nothing — always check before dereferencing.`,
  },
  {
    keys: ["malloc", "calloc", "realloc", "free", "dynamic memory", "heap", "memory allocation"],
    title: "Dynamic Memory — malloc / calloc / free",
    html: `<strong class="kw">Dynamic memory</strong> lets you allocate memory at runtime from the heap.\n\n<pre class="cb">#include &lt;stdio.h&gt;\n#include &lt;stdlib.h&gt;\n\nint main() {\n    int *arr = (int*) malloc(5 * sizeof(int));\n    if (arr == NULL) { printf("Allocation failed!\\n"); return 1; }\n\n    for (int i = 0; i &lt; 5; i++) arr[i] = i * 10;\n    for (int i = 0; i &lt; 5; i++) printf("%d ", arr[i]);\n\n    free(arr);  // always free!\n    return 0;\n}</pre>\n<strong class="kw">Functions:</strong><br/>• <code class="ic">malloc(size)</code> — allocates bytes, uninitialized<br/>• <code class="ic">calloc(n, size)</code> — allocates n×size bytes, zeroed<br/>• <code class="ic">realloc(ptr, size)</code> — resizes an existing allocation<br/>• <code class="ic">free(ptr)</code> — releases memory back to the OS`,
  },
  {
    keys: ["struct", "structure", "structures", "record"],
    title: "Structs in C",
    html: `A <strong class="kw">struct</strong> groups related variables of different types under one name.\n\n<pre class="cb">#include &lt;stdio.h&gt;\n\nstruct Student {\n    char  name[50];\n    int   age;\n    float gpa;\n};\n\nint main() {\n    struct Student s = {"Alice", 21, 3.9};\n    printf("Name: %s, GPA: %.1f\\n", s.name, s.gpa);\n\n    struct Student *sp = &amp;s;\n    printf("Age via pointer: %d\\n", sp-&gt;age);\n    return 0;\n}</pre>\n<strong class="kw">Tip:</strong> Use <code class="ic">typedef</code> to avoid typing <code class="ic">struct</code> every time:\n<pre class="cb">typedef struct { int x; int y; } Point;\nPoint p = {3, 7};</pre>`,
  },
  {
    keys: ["recursion", "recursive", "base case", "factorial", "fibonacci"],
    title: "Recursion in C",
    html: `<strong class="kw">Recursion</strong> is when a function calls itself. Every recursive function needs a <em>base case</em> to stop.\n\n<pre class="cb">#include &lt;stdio.h&gt;\n\nint factorial(int n) {\n    if (n &lt;= 1) return 1;          // base case\n    return n * factorial(n - 1);   // recursive call\n}\n\nint main() {\n    printf("5! = %d\\n", factorial(5)); // 120\n    return 0;\n}</pre>\n<strong class="kw">Warning:</strong> Too many recursive calls causes a <em>stack overflow</em>. For large inputs, prefer iteration or memoization.`,
  },
  {
    keys: ["for", "loop", "loops", "while", "do while", "iteration", "iterate"],
    title: "Loops in C",
    html: `C has <strong class="kw">three loop types</strong>:\n\n<pre class="cb">#include &lt;stdio.h&gt;\nint main() {\n    // 1. for loop\n    for (int i = 0; i &lt; 5; i++)\n        printf("for: %d\\n", i);\n\n    // 2. while loop\n    int j = 0;\n    while (j &lt; 3) { printf("while: %d\\n", j); j++; }\n\n    // 3. do-while — runs at least once\n    int k = 0;\n    do { printf("do-while: %d\\n", k); k++; } while (k &lt; 2);\n    return 0;\n}</pre>\n<strong class="kw">Loop control:</strong><br/>• <code class="ic">break</code> — exits the loop immediately<br/>• <code class="ic">continue</code> — skips to the next iteration`,
  },
  {
    keys: ["array", "arrays", "index", "element", "subscript", "2d array"],
    title: "Arrays in C",
    html: `An <strong class="kw">array</strong> stores multiple values of the same type in contiguous memory.\n\n<pre class="cb">#include &lt;stdio.h&gt;\nint main() {\n    int nums[5] = {10, 20, 30, 40, 50};\n    printf("First: %d\\n", nums[0]);  // 10\n    for (int i = 0; i &lt; 5; i++) printf("%d ", nums[i]);\n\n    int grid[3][4] = {{1,2,3,4},{5,6,7,8},{9,10,11,12}};\n    printf("\\ngrid[1][2] = %d\\n", grid[1][2]); // 7\n    return 0;\n}</pre>\n<strong class="kw">Important:</strong> Arrays don't store their own length — always track the size. Out-of-bounds access is <em>undefined behaviour</em>.`,
  },
  {
    keys: ["function", "functions", "parameter", "argument", "return", "prototype", "void"],
    title: "Functions in C",
    html: `<strong class="kw">Functions</strong> break code into reusable, named blocks.\n\n<pre class="cb">#include &lt;stdio.h&gt;\n\nint add(int a, int b);\nvoid greet(char *name);\n\nint main() {\n    printf("Sum: %d\\n", add(3, 7));  // 10\n    greet("Alice");\n    return 0;\n}\n\nint add(int a, int b) { return a + b; }\nvoid greet(char *name) { printf("Hello, %s!\\n", name); }</pre>\n<strong class="kw">C passes arguments by value</strong> — a copy is made. To modify the original, pass a pointer:\n<pre class="cb">void increment(int *n) { (*n)++; }</pre>`,
  },
  {
    keys: ["data type", "data types", "int", "float", "double", "char", "long", "short", "unsigned", "sizeof"],
    title: "Data Types in C",
    html: `<strong class="kw">Basic data types</strong> in C:\n\n<pre class="cb">int    a = 42;           // integer      (4 bytes)\nfloat  b = 3.14f;        // float        (4 bytes)\ndouble c = 3.14159265;   // double prec. (8 bytes)\nchar   d = 'A';          // character    (1 byte)\nlong   e = 1234567890L;  // large int\nunsigned int f = 300;    // non-negative only</pre>\n<strong class="kw">Format specifiers:</strong><br/>• <code class="ic">%d</code> int &nbsp;• <code class="ic">%f</code> float &nbsp;• <code class="ic">%lf</code> double<br/>• <code class="ic">%c</code> char &nbsp;• <code class="ic">%s</code> string &nbsp;• <code class="ic">%p</code> pointer`,
  },
  {
    keys: ["string", "strings", "char array", "strlen", "strcpy", "strcmp", "strcat"],
    title: "Strings in C",
    html: `In C, a <strong class="kw">string</strong> is a null-terminated (<code class="ic">\\0</code>) array of <code class="ic">char</code>.\n\n<pre class="cb">#include &lt;string.h&gt;\n\nchar s1[] = "Hello";\nchar s2[20] = "World";\n\nstrlen(s1)     // 5\nstrcmp(s1,s2)  // nonzero (not equal)\nstrcat(s2,"!") // s2 = "World!"\nstrcpy(s3, s1) // copy "Hello" into s3</pre>\n<strong class="kw">Common functions</strong> from <code class="ic">&lt;string.h&gt;</code>:<br/><code class="ic">strlen</code> · <code class="ic">strcpy</code> · <code class="ic">strcat</code> · <code class="ic">strcmp</code> · <code class="ic">strtok</code>`,
  },
  {
    keys: ["typedef", "type definition", "alias", "type alias"],
    title: "typedef in C",
    html: `<strong class="kw">typedef</strong> creates an alias for an existing type.\n\n<pre class="cb">typedef unsigned int uint;\ntypedef struct {\n    int x;\n    int y;\n} Point;\n\nuint  count = 42;\nPoint p     = {3, 7};\nprintf("Point: (%d, %d)\\n", p.x, p.y);</pre>\n<strong class="kw">Benefit:</strong> Write <code class="ic">Point p;</code> instead of <code class="ic">struct Point p;</code> every time.`,
  },
  {
    keys: ["enum", "enums", "enumeration", "named constant"],
    title: "Enums in C",
    html: `An <strong class="kw">enum</strong> defines a set of named integer constants.\n\n<pre class="cb">typedef enum {\n    MON = 0, TUE, WED, THU, FRI, SAT, SUN\n} Day;\n\nDay today = WED;\nif (today == WED) printf("Midweek!\\n");</pre>\n<strong class="kw">Tip:</strong> Enums make switch-case statements far more readable than magic numbers.`,
  },
  {
    keys: ["union", "unions", "shared memory"],
    title: "Unions in C",
    html: `A <strong class="kw">union</strong> is like a struct, but all members share the same memory.\n\n<pre class="cb">union Data {\n    int   i;\n    float f;\n    char  c;\n};\n\nunion Data d;\nd.i = 42;    printf("Int: %d\\n", d.i);\nd.f = 3.14f; printf("Float: %.2f\\n", d.f); // overwrites d.i!</pre>\n<strong class="kw">Use case:</strong> Unions save memory when you store different types but only one at a time.`,
  },
  {
    keys: ["file", "files", "fopen", "fclose", "fread", "fwrite", "fprintf", "fscanf", "file io", "file i/o"],
    title: "File I/O in C",
    html: `C uses <code class="ic">FILE*</code> pointers and functions from <code class="ic">&lt;stdio.h&gt;</code>.\n\n<pre class="cb">// Write to file\nFILE *fp = fopen("data.txt", "w");\nfprintf(fp, "Hello, file!\\n");\nfclose(fp);\n\n// Read back\nfp = fopen("data.txt", "r");\nchar line[100];\nwhile (fgets(line, sizeof(line), fp))\n    printf("%s", line);\nfclose(fp);</pre>\n<strong class="kw">File modes:</strong><br/>• <code class="ic">"r"</code> read &nbsp;• <code class="ic">"w"</code> write &nbsp;• <code class="ic">"a"</code> append<br/><strong class="kw">Always</strong> check for <code class="ic">NULL</code> and call <code class="ic">fclose</code>.`,
  },
  {
    keys: ["preprocessor", "macro", "#define", "#include", "#ifdef", "#ifndef", "#endif", "directive"],
    title: "Preprocessor Directives",
    html: `The <strong class="kw">preprocessor</strong> runs before compilation, processing directives that start with <code class="ic">#</code>.\n\n<pre class="cb">#define PI      3.14159\n#define MAX(a,b) ((a) &gt; (b) ? (a) : (b))\n#define DEBUG   1\n\nprintf("Area: %.2f\\n", PI * 5 * 5);  // 78.54\nprintf("Max:  %d\\n",   MAX(10, 20)); // 20\n\n#ifdef DEBUG\n    printf("[DEBUG] debug mode on\\n");\n#endif</pre>\n<strong class="kw">Common directives:</strong><br/><code class="ic">#include</code> · <code class="ic">#define</code> · <code class="ic">#ifdef</code> · <code class="ic">#pragma once</code>`,
  },
  {
    keys: ["operator", "operators", "arithmetic", "logical", "comparison", "increment", "decrement"],
    title: "Operators in C",
    html: `<strong class="kw">C operators</strong> by category:\n\n<pre class="cb">// Arithmetic:  + - * / %\nint rem = 10 % 3;        // 1\n\n// Comparison:  == != &lt; &gt; &lt;= &gt;=\nint eq = (5 == 5);       // 1 (true)\n\n// Logical:     &amp;&amp; || !\nint ok = (x &gt; 0 &amp;&amp; x &lt; 100);\n\n// Increment / Decrement\nn++;   // post-increment\n++n;   // pre-increment</pre>\n<strong class="kw">Precedence:</strong> <code class="ic">*</code> <code class="ic">/</code> before <code class="ic">+</code> <code class="ic">-</code>. Use parentheses when in doubt.`,
  },
  {
    keys: ["variable", "variables", "declare", "declaration", "assign", "assignment", "initialize"],
    title: "Variables in C",
    html: `A <strong class="kw">variable</strong> is a named storage location in memory. You must <em>declare</em> a type before using it.\n\n<pre class="cb">#include &lt;stdio.h&gt;\nint main() {\n    int   age    = 20;       // integer\n    float height = 5.9f;     // floating point\n    char  grade  = 'A';      // single character\n    int   uninit;            // ⚠️ garbage value!\n\n    printf("Age: %d, Height: %.1f, Grade: %c\\n",\n            age, height, grade);\n    return 0;\n}</pre>\n<strong class="kw">Rules:</strong><br/>• Variable names start with a letter or <code class="ic">_</code><br/>• Case-sensitive: <code class="ic">count</code> ≠ <code class="ic">Count</code><br/>• Always initialise before use`,
  },
  {
    keys: ["if", "if else", "else if", "conditional", "conditionals", "condition", "branching"],
    title: "If / Else — Conditionals in C",
    html: `<strong class="kw">Conditionals</strong> let your program make decisions.\n\n<pre class="cb">#include &lt;stdio.h&gt;\nint main() {\n    int score = 75;\n\n    if (score &gt;= 90) {\n        printf("Grade: A\\n");\n    } else if (score &gt;= 70) {\n        printf("Grade: B\\n");  // ← this runs\n    } else if (score &gt;= 50) {\n        printf("Grade: C\\n");\n    } else {\n        printf("Grade: F\\n");\n    }\n    return 0;\n}</pre>\n<strong class="kw">Tip:</strong> The condition inside <code class="ic">if()</code> evaluates to <code class="ic">1</code> (true) or <code class="ic">0</code> (false). Any non-zero value is truthy.`,
  },
  {
    keys: ["switch", "switch case", "case", "default", "break switch"],
    title: "Switch Statement in C",
    html: `<strong class="kw">switch</strong> selects one of many blocks based on a value — cleaner than a long if-else chain.\n\n<pre class="cb">#include &lt;stdio.h&gt;\nint main() {\n    int day = 3;\n    switch (day) {\n        case 1: printf("Monday\\n");    break;\n        case 2: printf("Tuesday\\n");   break;\n        case 3: printf("Wednesday\\n"); break; // ← runs\n        case 4: printf("Thursday\\n");  break;\n        default: printf("Weekend!\\n"); break;\n    }\n    return 0;\n}</pre>\n<strong class="kw">⚠️ Always add <code class="ic">break</code></strong> — without it, execution "falls through" to the next case.`,
  },
  {
    keys: ["scope", "scope of variables", "local", "global variable", "block scope", "lifetime"],
    title: "Scope of Variables in C",
    html: `<strong class="kw">Scope</strong> determines where a variable can be accessed.\n\n<pre class="cb">#include &lt;stdio.h&gt;\n\nint globalVar = 100;  // 🌍 accessible everywhere\n\nvoid demo() {\n    int localVar = 42;  // 📍 only inside demo()\n    printf("local: %d, global: %d\\n", localVar, globalVar);\n}\n\nint main() {\n    demo();\n    // printf("%d", localVar); // ❌ Error: not in scope\n    printf("global: %d\\n", globalVar); // ✅\n    return 0;\n}</pre>\n<strong class="kw">Rules:</strong><br/>• <strong class="kw">Local:</strong> declared inside <code class="ic">{ }</code>, exists only there<br/>• <strong class="kw">Global:</strong> declared outside all functions, lives until program ends`,
  },
  {
    keys: ["type cast", "type casting", "cast", "casting", "implicit", "explicit conversion"],
    title: "Type Casting in C",
    html: `<strong class="kw">Type casting</strong> converts a value from one type to another.\n\n<pre class="cb">#include &lt;stdio.h&gt;\nint main() {\n    int   a = 7, b = 2;\n    float result;\n\n    result = a / b;          // ❌  3.0 (integer division!)\n    result = (float)a / b;   // ✅  3.5 (explicit cast)\n\n    double pi = 3.14159;\n    int trunc = (int)pi;     // 3  (drops decimal)\n\n    char c = 65;\n    printf("%c\\n", c);        // A  (int → char)\n    return 0;\n}</pre>\n<strong class="kw">Rule:</strong> When mixing <code class="ic">int</code> and <code class="ic">float</code>, cast explicitly to avoid silent bugs.`,
  },
  {
    keys: ["stack", "heap", "stack vs heap", "memory model", "memory layout", "stack overflow"],
    title: "Stack vs Heap Memory",
    html: `C programs use two main memory regions:\n\n<pre class="cb">┌───────────────────┐\n│   Stack (LIFO)    │ ← local variables, function calls\n│   fast, limited   │   auto-cleaned when function returns\n├───────────────────┤\n│   Heap            │ ← malloc/calloc allocations\n│   large, manual   │   YOU must call free()\n└───────────────────┘</pre>\n<pre class="cb">void func() {\n    int x = 5;          // stack — auto freed\n    int *p = malloc(4); // heap  — must free\n    free(p);            // ✅ release heap memory\n}</pre>\n<strong class="kw">Stack overflow</strong> occurs when too many recursive calls exhaust stack space.`,
  },
  {
    keys: ["memory leak", "leak", "valgrind", "forget free", "memory management"],
    title: "Memory Leaks in C",
    html: `A <strong class="kw">memory leak</strong> happens when heap memory is allocated but never freed.\n\n<pre class="cb">// ❌ LEAK — malloc without free\nvoid leaky() {\n    int *p = malloc(100 * sizeof(int));\n    // forgot free(p)!\n}\n\n// ✅ CORRECT\nvoid proper() {\n    int *p = malloc(100 * sizeof(int));\n    if (!p) return;\n    // ... use p ...\n    free(p);  // always free!\n    p = NULL; // avoid dangling pointer\n}</pre>\n<strong class="kw">Detection:</strong> Use <code class="ic">valgrind --leak-check=full ./program</code> to find leaks.`,
  },
  {
    keys: ["bitwise", "bitwise operator", "bit manipulation", "shift", "xor", "and or", "not bit"],
    title: "Bitwise Operators in C",
    html: `<strong class="kw">Bitwise operators</strong> work directly on binary bits — used in systems programming and flags.\n\n<pre class="cb">#include &lt;stdio.h&gt;\nint main() {\n    int a = 0b1010;  // 10\n    int b = 0b1100;  // 12\n\n    printf("AND:  %d\\n", a &amp; b);   // 0b1000 = 8\n    printf("OR:   %d\\n", a | b);   // 0b1110 = 14\n    printf("XOR:  %d\\n", a ^ b);   // 0b0110 = 6\n    printf("NOT:  %d\\n", ~a);      // -11\n    printf("SHL:  %d\\n", a &lt;&lt; 1);  // 20 (×2)\n    printf("SHR:  %d\\n", a &gt;&gt; 1);  // 5  (÷2)\n    return 0;\n}</pre>\n<strong class="kw">Common uses:</strong> setting flags, permissions, packing data into bytes.`,
  },
  {
    keys: ["command line", "argv", "argc", "command line arguments", "main arguments"],
    title: "Command Line Arguments",
    html: `<strong class="kw"><code class="ic">argc</code></strong> (argument count) and <strong class="kw"><code class="ic">argv</code></strong> (argument vector) let you pass values when running a program.\n\n<pre class="cb">#include &lt;stdio.h&gt;\n\nint main(int argc, char *argv[]) {\n    printf("Program: %s\\n", argv[0]);   // program name\n    printf("Args:    %d\\n", argc - 1);  // number of args\n\n    for (int i = 1; i &lt; argc; i++) {\n        printf("arg[%d] = %s\\n", i, argv[i]);\n    }\n    return 0;\n}</pre>\n<strong class="kw">Run as:</strong> <code class="ic">./program hello world</code><br/>Output: <code class="ic">arg[1] = hello</code>, <code class="ic">arg[2] = world</code>`,
  },
  {
    keys: ["function pointer", "function pointers", "callback", "pointer to function"],
    title: "Function Pointers in C",
    html: `A <strong class="kw">function pointer</strong> stores the address of a function — enabling callbacks and dynamic dispatch.\n\n<pre class="cb">#include &lt;stdio.h&gt;\n\nint add(int a, int b) { return a + b; }\nint mul(int a, int b) { return a * b; }\n\nint main() {\n    int (*op)(int, int);   // declare function pointer\n\n    op = add;\n    printf("add: %d\\n", op(3, 4));  // 7\n\n    op = mul;\n    printf("mul: %d\\n", op(3, 4));  // 12\n    return 0;\n}</pre>\n<strong class="kw">Use case:</strong> <code class="ic">qsort()</code> takes a comparator function pointer as an argument.`,
  },
  {
    keys: ["linked list", "linkedlist", "node", "singly linked", "doubly linked", "next pointer"],
    title: "Linked List in C",
    html: `A <strong class="kw">linked list</strong> is a chain of nodes where each holds data and a pointer to the next node.\n\n<pre class="cb">#include &lt;stdio.h&gt;\n#include &lt;stdlib.h&gt;\n\ntypedef struct Node {\n    int         data;\n    struct Node *next;\n} Node;\n\nNode* create(int val) {\n    Node *n = malloc(sizeof(Node));\n    n-&gt;data = val;\n    n-&gt;next = NULL;\n    return n;\n}\n\nint main() {\n    Node *head = create(10);\n    head-&gt;next = create(20);\n    head-&gt;next-&gt;next = create(30);\n\n    for (Node *p = head; p; p = p-&gt;next)\n        printf("%d → ", p-&gt;data);  // 10 → 20 → 30\n    return 0;\n}</pre>\n<strong class="kw">Vs Array:</strong> O(1) insertion/deletion but no random access.`,
  },
  {
    keys: ["sorting", "sort", "bubble sort", "selection sort", "qsort", "insertion sort"],
    title: "Sorting in C",
    html: `C has <strong class="kw">built-in <code class="ic">qsort()</code></strong> and you can implement classic sorts manually.\n\n<pre class="cb">#include &lt;stdio.h&gt;\n#include &lt;stdlib.h&gt;\n\nint cmp(const void *a, const void *b) {\n    return *(int*)a - *(int*)b;\n}\n\nint main() {\n    int arr[] = {5, 2, 8, 1, 9};\n    int n = 5;\n    qsort(arr, n, sizeof(int), cmp);\n    for (int i = 0; i &lt; n; i++)\n        printf("%d ", arr[i]);  // 1 2 5 8 9\n    return 0;\n}</pre>\n<strong class="kw">Bubble Sort:</strong>\n<pre class="cb">for (int i=0;i&lt;n-1;i++)\n  for (int j=0;j&lt;n-1-i;j++)\n    if (arr[j]&gt;arr[j+1]){\n      int t=arr[j];arr[j]=arr[j+1];arr[j+1]=t;\n    }</pre>`,
  },
  {
    keys: ["printf", "scanf", "format specifier", "input output", "stdin", "stdout", "print"],
    title: "printf & scanf — Input/Output",
    html: `<strong class="kw"><code class="ic">printf</code></strong> outputs to console; <strong class="kw"><code class="ic">scanf</code></strong> reads user input.\n\n<pre class="cb">#include &lt;stdio.h&gt;\nint main() {\n    int age;\n    char name[50];\n\n    printf("Enter your name: ");\n    scanf("%49s", name);\n\n    printf("Enter your age: ");\n    scanf("%d", &amp;age);   // note the &amp; ← address of age\n\n    printf("Hi %s! You are %d years old.\\n", name, age);\n    return 0;\n}</pre>\n<strong class="kw">Format specifiers:</strong><br/><code class="ic">%d</code> int &nbsp;• <code class="ic">%f</code> float &nbsp;• <code class="ic">%s</code> string<br/><code class="ic">%c</code> char &nbsp;• <code class="ic">%lf</code> double &nbsp;• <code class="ic">%%</code> literal %`,
  },
  {
    keys: ["header file", "header files", "#include", "custom header", ".h file", "library"],
    title: "Header Files in C",
    html: `<strong class="kw">Header files</strong> (<code class="ic">.h</code>) share prototypes, macros, and types across multiple <code class="ic">.c</code> files.\n\n<pre class="cb">// mymath.h\n#ifndef MYMATH_H\n#define MYMATH_H\nint square(int n);\nint cube(int n);\n#endif</pre>\n<pre class="cb">// mymath.c\n#include "mymath.h"\nint square(int n) { return n * n; }\nint cube(int n)   { return n * n * n; }</pre>\n<pre class="cb">// main.c\n#include &lt;stdio.h&gt;\n#include "mymath.h"\nint main() {\n    printf("%d\\n", square(5)); // 25\n    return 0;\n}</pre>\n<strong class="kw">Always use include guards</strong> (<code class="ic">#ifndef</code>) to prevent double-inclusion.`,
  },
  {
    keys: ["compile", "compilation", "gcc", "how to compile", "build", "linker", "object file"],
    title: "How to Compile a C Program",
    html: `<strong class="kw">GCC</strong> is the most popular C compiler.\n\n<pre class="cb"># Basic compilation\ngcc main.c -o main\n./main\n\n# With warnings (recommended)\ngcc -Wall -Wextra main.c -o main\n\n# Multiple source files\ngcc main.c mymath.c -o app\n\n# Debug mode\ngcc -g main.c -o main_debug\n\n# Optimised build\ngcc -O2 main.c -o main_fast</pre>\n<strong class="kw">4 Compilation phases:</strong><br/>1️⃣ Preprocessing (<code class="ic">#include</code>, <code class="ic">#define</code>)<br/>2️⃣ Compilation → assembly<br/>3️⃣ Assembly → object file (<code class="ic">.o</code>)<br/>4️⃣ Linking → executable`,
  },
  {
    keys: ["const", "constant", "const keyword", "read only", "immutable"],
    title: "const Keyword in C",
    html: `<strong class="kw"><code class="ic">const</code></strong> marks a variable as read-only — the compiler errors if you try to modify it.\n\n<pre class="cb">#include &lt;stdio.h&gt;\n\nconst float PI  = 3.14159f;\nconst int   MAX = 100;\n\nint main() {\n    // PI = 3.0;  ❌ error: read-only variable\n    printf("PI = %.5f, MAX = %d\\n", PI, MAX);\n\n    int value = 42;\n    const int *ptr1 = &amp;value;   // can't change *ptr1\n    int *const ptr2 = &amp;value;   // can't change ptr2 itself\n    return 0;\n}</pre>\n<strong class="kw">Best practice:</strong> Prefer <code class="ic">const</code> over <code class="ic">#define</code> for typed constants — it's type-safe.`,
  },
  {
    keys: ["goto", "goto statement", "jump", "label"],
    title: "goto Statement in C",
    html: `<strong class="kw"><code class="ic">goto</code></strong> jumps unconditionally to a labelled statement within the same function.\n\n<pre class="cb">#include &lt;stdio.h&gt;\nint main() {\n    int i = 0;\nloop:                        // ← label\n    if (i &lt; 5) {\n        printf("%d ", i++);   // 0 1 2 3 4\n        goto loop;           // jump back\n    }\n    printf("\\nDone!\\n");\n    return 0;\n}</pre>\n<strong class="kw">⚠️ Avoid <code class="ic">goto</code></strong> in most cases — the only accepted use is cleanup in error handling or breaking deeply nested loops.`,
  },
  {
    keys: ["error handling", "errno", "perror", "exit", "error code", "return code"],
    title: "Error Handling in C",
    html: `C has no exceptions — errors are handled through <strong class="kw">return values</strong>, <code class="ic">errno</code>, and <code class="ic">perror()</code>.\n\n<pre class="cb">#include &lt;stdio.h&gt;\n#include &lt;stdlib.h&gt;\n#include &lt;errno.h&gt;\n#include &lt;string.h&gt;\n\nint main() {\n    FILE *fp = fopen("missing.txt", "r");\n    if (fp == NULL) {\n        perror("fopen");          // prints system error\n        printf("Error: %s\\n", strerror(errno));\n        return EXIT_FAILURE;    // = 1\n    }\n    fclose(fp);\n    return EXIT_SUCCESS;        // = 0\n}</pre>\n<strong class="kw">Pattern:</strong> Always check return values of <code class="ic">malloc</code>, <code class="ic">fopen</code>, <code class="ic">scanf</code>.`,
  },
  {
    keys: ["math", "math library", "math functions", "sqrt", "pow", "fabs", "ceil", "floor", "sin cos"],
    title: "Math Functions in C",
    html: `Include <code class="ic">&lt;math.h&gt;</code> and link with <code class="ic">-lm</code> for mathematical functions.\n\n<pre class="cb">#include &lt;stdio.h&gt;\n#include &lt;math.h&gt;\n\nint main() {\n    printf("sqrt(16) = %.2f\\n", sqrt(16));   // 4.00\n    printf("pow(2,10) = %.0f\\n", pow(2,10)); // 1024\n    printf("fabs(-5)  = %.1f\\n", fabs(-5));  // 5.0\n    printf("ceil(3.2) = %.1f\\n", ceil(3.2)); // 4.0\n    printf("floor(3.9)= %.1f\\n", floor(3.9));// 3.0\n    printf("sin(0)    = %.1f\\n", sin(0));    // 0.0\n    return 0;\n}</pre>\n<strong class="kw">Compile with:</strong> <code class="ic">gcc main.c -lm -o main</code>`,
  },
  {
    keys: ["static", "static keyword", "static variable", "static function"],
    title: "static Keyword in C",
    html: `<strong class="kw"><code class="ic">static</code></strong> has two meanings depending on context:\n\n<pre class="cb">// 1. Static LOCAL variable — keeps value between calls\n#include &lt;stdio.h&gt;\nvoid counter() {\n    static int count = 0;  // initialised only once\n    count++;\n    printf("count = %d\\n", count);\n}\nint main() {\n    counter(); // count = 1\n    counter(); // count = 2\n    counter(); // count = 3\n    return 0;\n}</pre>\n<pre class="cb">// 2. Static GLOBAL/FUNCTION — limits scope to the file\nstatic int helper_var = 0;       // hidden from other .c files\nstatic void internal_func() { }  // not visible externally</pre>`,
  },
  {
    keys: ["pass by reference", "pass by value", "call by reference", "address parameter"],
    title: "Pass by Value vs Pass by Reference",
    html: `C is <strong class="kw">always pass-by-value</strong> — but you can simulate pass-by-reference using pointers.\n\n<pre class="cb">#include &lt;stdio.h&gt;\n\n// Pass by VALUE — original unchanged\nvoid doubleVal(int x) {\n    x *= 2;   // only changes local copy\n}\n\n// Pass by REFERENCE — original modified\nvoid doubleRef(int *x) {\n    *x *= 2;  // modifies the actual variable\n}\n\nint main() {\n    int n = 5;\n    doubleVal(n);  printf("%d\\n", n); // 5  (unchanged)\n    doubleRef(&amp;n); printf("%d\\n", n); // 10 (modified!)\n    return 0;\n}</pre>\n<strong class="kw">Rule:</strong> To modify a variable inside a function, pass its address with <code class="ic">&amp;</code> and use <code class="ic">*</code> inside.`,
  },
  {
    keys: ["2d array", "two dimensional", "matrix", "multidimensional", "2d arrays"],
    title: "2D Arrays & Matrices in C",
    html: `A <strong class="kw">2D array</strong> stores data in rows and columns (like a table or matrix).\n\n<pre class="cb">#include &lt;stdio.h&gt;\nint main() {\n    int mat[3][3] = {\n        {1, 2, 3},\n        {4, 5, 6},\n        {7, 8, 9}\n    };\n\n    for (int r = 0; r &lt; 3; r++) {\n        for (int c = 0; c &lt; 3; c++)\n            printf("%3d", mat[r][c]);\n        printf("\\n");\n    }\n    printf("Centre: %d\\n", mat[1][1]); // 5\n    return 0;\n}</pre>\n<strong class="kw">Memory:</strong> 2D arrays are stored row-by-row (row-major order) in a contiguous block.`,
  },
  {
    keys: ["string format", "string formatting", "sprintf", "snprintf", "format string"],
    title: "String Formatting — sprintf & snprintf",
    html: `<strong class="kw"><code class="ic">sprintf</code></strong> formats a string into a char buffer — like <code class="ic">printf</code> but writes to a string.\n\n<pre class="cb">#include &lt;stdio.h&gt;\nint main() {\n    char buf[100];\n    int  score = 95;\n    char name[]= "Alice";\n\n    // sprintf — write to buffer\n    sprintf(buf, "Player: %s, Score: %d", name, score);\n    printf("%s\\n", buf);  // Player: Alice, Score: 95\n\n    // snprintf — safe: limits characters written\n    snprintf(buf, sizeof(buf), "Score: %05d", score);\n    printf("%s\\n", buf);  // Score: 00095\n    return 0;\n}</pre>\n<strong class="kw">Best practice:</strong> Always use <code class="ic">snprintf</code> to prevent buffer overflow.`,
  },
];

// ─── Keyword matcher ─────────────────────────────────────────────────────────
function findAnswer(query) {
  const low = query.toLowerCase();
  let best = null, bestScore = 0;
  for (const entry of KB) {
    let score = 0;
    for (const k of entry.keys) {
      if (low.includes(k)) score += k.length;
    }
    if (score > bestScore) { bestScore = score; best = entry; }
  }
  return best;
}

// ─── Render KB html ───────────────────────────────────────────────────────────
function renderKB(html) {
  return html
    .replace(/\.kw/g, 'style="color:#f5a000;font-weight:700"')
    .replace(/\.ic/g, 'style="background:rgba(245,160,0,.15);color:#f5a000;padding:1px 5px;border-radius:4px;font-family:monospace;font-size:11px"')
    .replace(/\.cb/g, 'style="background:#0d1117;color:#4ade80;padding:12px 14px;border-radius:10px;font-size:11px;margin:8px 0;overflow-x:auto;white-space:pre;font-family:monospace;border:1px solid #30363d;line-height:1.6;display:block"');
}

// ─── Icons ───────────────────────────────────────────────────────────────────
function BotIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="#f5a000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v4" />
      <line x1="8" y1="16" x2="8" y2="16" strokeWidth="3" />
      <line x1="16" y1="16" x2="16" y2="16" strokeWidth="3" />
    </svg>
  );
}
function UserIcon({ size = 13 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="#a5b4fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
function SendIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function Chatbot({ isOpen, onToggle }) {
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState([
    {
      id: 0, role: "bot",
      html: renderKB(
        `<strong class="kw">👋 Welcome to C Programming Tutor!</strong><br/><br/>` +
        `100% offline · No API needed · Instant answers<br/><br/>` +
        `Ask me about:<br/>` +
        `<strong class="kw">Variables · Data Types · Operators · If/Else · Switch · Loops · Arrays · 2D Arrays</strong><br/>` +
        `<strong class="kw">Functions · Recursion · Pointers · malloc · Structs · Strings · Typedef · Enums · Unions</strong><br/>` +
        `<strong class="kw">File I/O · Preprocessor · Scope · Type Casting · Stack vs Heap · Memory Leaks</strong><br/>` +
        `<strong class="kw">Bitwise Ops · argc/argv · Function Pointers · Linked Lists · Sorting · Header Files</strong><br/>` +
        `<strong class="kw">Compilation · const · goto · Error Handling · Math Library · Static · sprintf</strong><br/><br/>` +
        `Click a chip below or type your question ↓`
      ),
    }
  ]);

  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs]);
  useEffect(() => { if (isOpen) setTimeout(() => inputRef.current?.focus(), 150); }, [isOpen]);

  const send = (text) => {
    const q = (text ?? input).trim();
    if (!q) return;

    const userMsg = {
      id: Date.now(), role: "user",
      html: q.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    };
    setMsgs(p => [...p, userMsg]);
    setInput("");

    setTimeout(() => {
      const ans = findAnswer(q);
      const botMsg = {
        id: Date.now() + 1, role: "bot",
        html: ans
          ? `<strong style="color:#f5a000;font-weight:700">${ans.title}</strong><br/><br/>${renderKB(ans.html)}`
          : renderKB(
            `I can answer questions about:<br/><strong class="kw">pointers · malloc · structs · recursion · loops · arrays · functions · data types · strings · typedef · enums · unions · file I/O · preprocessor · operators</strong><br/><br/>` +
            `Try: <em>"What is a pointer?"</em> or click a suggestion below.`
          ),
      };
      setMsgs(p => [...p, botMsg]);
    }, 180);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="chatbot-panel"
          initial={{ opacity: 0, scale: 0.93, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.93, y: 20 }}
          transition={{ type: "spring", stiffness: 340, damping: 28 }}
          style={{
            position: "fixed",
            bottom: 88,
            zIndex: 400,
            width: isMobile ? "calc(100% - 32px)" : 390,
            maxWidth: 420,
            height: isMobile ? "calc(100vh - 120px)" : 580,
            maxHeight: 700,
            left: isMobile ? "50%" : "auto",
            right: isMobile ? "auto" : 20,
            transform: isMobile ? "translateX(-50%)" : "none",
            background: "rgba(8,14,34,0.97)",
            backdropFilter: "blur(20px)",
            borderRadius: 20,
            border: "1px solid rgba(245,160,0,0.22)",
            boxShadow: "0 24px 80px rgba(0,0,0,0.85), 0 0 0 1px rgba(245,160,0,0.08)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            fontFamily: '"IBM Plex Mono","Fira Code",monospace',
            transition: "all 0.3s ease",
          }}
        >
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;700&display=swap');
            ::placeholder { color: rgba(245,160,0,0.3) !important; }
            ::-webkit-scrollbar { width: 4px; }
            ::-webkit-scrollbar-track { background: transparent; }
            ::-webkit-scrollbar-thumb { background: rgba(245,160,0,0.25); border-radius: 4px; }
            @keyframes cbFadeUp {
              from { opacity:0; transform:translateY(8px); }
              to   { opacity:1; transform:translateY(0); }
            }
            .cb-msg-row { animation: cbFadeUp .22s ease both; }
            .cb-chip:hover { background:rgba(245,160,0,0.18)!important; color:#f5a000!important; }
            .cb-send:hover:not(:disabled) { transform:scale(1.06)!important; }
          `}</style>

          {/* ── Header ── */}
          <div style={{
            padding: "12px 16px",
            display: "flex", alignItems: "center", gap: 10,
            background: "linear-gradient(90deg,rgba(245,160,0,0.14),rgba(58,58,58,0.10))",
            borderBottom: "1px solid rgba(245,160,0,0.18)",
            flexShrink: 0,
          }}>
            <div style={{
              width: 38, height: 38, borderRadius: "50%",
              background: "linear-gradient(135deg,rgba(245,160,0,0.35),rgba(58,58,58,0.6))",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 4px 14px rgba(245,160,0,0.35)", flexShrink: 0,
              border: "1px solid rgba(245,160,0,0.3)",
            }}>
              <BotIcon size={18} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 13, letterSpacing: 0.3 }}>
                C Programming Tutor
              </div>
              <div style={{ fontSize: 10, color: "#f5a000", display: "flex", alignItems: "center", gap: 5 }}>
                <span style={{
                  width: 5, height: 5, borderRadius: "50%",
                  background: "#4ade80", display: "inline-block",
                  boxShadow: "0 0 6px #4ade80"
                }} />
                Static · Instant · Offline
              </div>
            </div>
            <button
              onClick={onToggle}
              style={{
                background: "rgba(245,160,0,0.1)", border: "1px solid rgba(245,160,0,0.25)",
                borderRadius: 8, cursor: "pointer", color: "#f5a000",
                padding: "4px 6px", display: "flex", alignItems: "center",
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* ── Messages ── */}
          <div style={{
            flex: 1, overflowY: "auto", padding: "14px 14px 8px",
            display: "flex", flexDirection: "column", gap: 12,
          }}>
            {msgs.map(m => (
              <div key={m.id} className="cb-msg-row"
                style={{ display: "flex", gap: 8, flexDirection: m.role === "user" ? "row-reverse" : "row" }}>
                <div style={{
                  width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: m.role === "bot"
                    ? "linear-gradient(135deg,rgba(245,160,0,0.25),rgba(58,58,58,0.4))"
                    : "rgba(99,102,241,0.25)",
                  border: `1px solid ${m.role === "bot" ? "rgba(245,160,0,0.35)" : "rgba(99,102,241,0.4)"}`,
                }}>
                  {m.role === "bot" ? <BotIcon size={13} /> : <UserIcon />}
                </div>
                <div
                  style={{
                    maxWidth: "82%", padding: "9px 12px", borderRadius: 14,
                    fontSize: 12, lineHeight: 1.7,
                    ...(m.role === "user"
                      ? {
                        background: "linear-gradient(135deg,#f5a000,#e07b00)",
                        color: "#fff", borderTopRightRadius: 4,
                        boxShadow: "0 4px 16px rgba(245,160,0,0.3)"
                      }
                      : {
                        background: "rgba(255,255,255,0.04)",
                        color: "#c9dff7",
                        border: "1px solid rgba(245,160,0,0.15)",
                        borderTopLeftRadius: 4
                      })
                  }}
                  dangerouslySetInnerHTML={{ __html: m.html }}
                />
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* ── Suggestion chips ── */}
          <div style={{
            padding: "8px 12px", display: "flex", gap: 6,
            overflowX: "auto", borderTop: "1px solid rgba(245,160,0,0.12)", flexShrink: 0,
          }}>
            {SUGGESTIONS.map(s => (
              <button key={s} className="cb-chip" onClick={() => send(s)}
                style={{
                  flexShrink: 0, fontSize: 10, padding: "4px 10px",
                  background: "rgba(245,160,0,0.08)", color: "#c9956a",
                  border: "1px solid rgba(245,160,0,0.2)", borderRadius: 20,
                  cursor: "pointer", whiteSpace: "nowrap",
                  transition: "all .15s", fontFamily: "inherit",
                }}>
                {s}
              </button>
            ))}
          </div>

          {/* ── Input ── */}
          <div style={{
            padding: "10px 12px", borderTop: "1px solid rgba(245,160,0,0.12)",
            display: "flex", gap: 8, flexShrink: 0,
          }}>
            <input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && !e.shiftKey && send()}
              placeholder="Ask any C question..."
              style={{
                flex: 1, padding: "9px 14px", borderRadius: 12, fontSize: 12,
                outline: "none",
                background: "rgba(245,160,0,0.05)",
                border: "1px solid rgba(245,160,0,0.2)",
                color: "#c9dff7", fontFamily: "inherit", transition: "border-color .2s",
              }}
              onFocus={e => { e.target.style.borderColor = "rgba(245,160,0,0.55)"; }}
              onBlur={e => { e.target.style.borderColor = "rgba(245,160,0,0.2)"; }}
            />
            <button className="cb-send" onClick={() => send()} disabled={!input.trim()}
              style={{
                width: 38, height: 38, borderRadius: 10, border: "none", cursor: "pointer",
                background: "linear-gradient(135deg,#f5a000,#e07b00)",
                display: "flex", alignItems: "center", justifyContent: "center",
                opacity: !input.trim() ? 0.4 : 1,
                transition: "opacity .2s, transform .15s", flexShrink: 0,
              }}>
              <SendIcon />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}