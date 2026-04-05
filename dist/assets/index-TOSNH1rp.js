const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Basics-Bx6Oxb5R.js","assets/vendor-BEbIws4V.js","assets/Slide-DT13XMTU.js","assets/Diagram-DvtTc4y9.js","assets/CourseUI-Ch9NsHJe.js","assets/DataAndOps-Bvqkfn0_.js","assets/ControlFlow-DFUXx3lM.js","assets/StructuresAndArrays-CyKviXy0.js","assets/FunctionsAndPointers-Cxhy3BmH.js","assets/MemoryAndFiles-D5gECM9f.js","assets/AdvancedTopics-ZiOVoR3J.js","assets/FinalCongrats-BoBWx--C.js"])))=>i.map(i=>d[i]);
import{r as i,j as e,A as I,m as k,X as D,R as N,P as U,a as $,V as q,b as A,M as G,Y as L,c as X,E as Y,d as K}from"./vendor-BEbIws4V.js";(function(){const g=document.createElement("link").relList;if(g&&g.supports&&g.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))p(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&p(r)}).observe(document,{childList:!0,subtree:!0});function d(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function p(t){if(t.ep)return;t.ep=!0;const a=d(t);fetch(t.href,a)}})();const J="modulepreload",Q=function(o){return"/"+o},R={},w=function(g,d,p){let t=Promise.resolve();if(d&&d.length>0){let r=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(n=>({status:"fulfilled",value:n}),n=>({status:"rejected",reason:n}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),c=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));t=r(d.map(u=>{if(u=Q(u),u in R)return;R[u]=!0;const f=u.endsWith(".css"),n=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${n}`))return;const m=document.createElement("link");if(m.rel=f?"stylesheet":J,f||(m.as="script"),m.crossOrigin="",m.href=u,c&&m.setAttribute("nonce",c),document.head.appendChild(m),f)return new Promise((b,y)=>{m.addEventListener("load",b),m.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${u}`)))})}))}function a(r){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=r,window.dispatchEvent(s),!s.defaultPrevented)throw r}return t.then(r=>{for(const s of r||[])s.status==="rejected"&&a(s.reason);return g().catch(a)})};function Z(){return null}function ee(){return null}const h={border:"rgba(101,154,211,0.22)",accent1:"#0b67c9",accent2:"#659AD3",accent3:"#42a5f5",purple:"#6366f1",text:"#c9dff7",muted:"#4a6fa8"},te=["Welcome — C Masterclass","Ch 1 — Introduction","Ch 2 — History of C","Ch 3 — Features of C","Ch 4 — Program Structure","Ch 5 — Hello World","Ch 6 — Variables","Ch 7 — Data Types","Ch 8 — Operators","Ch 9 — Conditionals","Ch 10 — Loops","Ch 11 — Arrays","Ch 12 — C Libraries","Ch 13 — Functions","Ch 14 — Pointers","Ch 15 — Structures","Ch 16 — Dynamic Memory","Ch 17 — File Handling","Ch 18 — Preprocessor","Ch 19 — Enums & Typedef","Ch 20 — Recursion","Ch 21 — Complete!"],re=23,z=o=>!isFinite(o)||o<0?"0:00":`${Math.floor(o/60)}:${String(Math.floor(o%60)).padStart(2,"0")}`;function se({currentSlide:o,isOpen:g,onToggle:d}){const p=i.useRef(null),t=i.useRef(!1),[a,r]=i.useState(!1),[s,c]=i.useState(0),[u,f]=i.useState(0),[n,m]=i.useState(1),[b,y]=i.useState(!1),[v,S]=i.useState(!1),[C,M]=i.useState(!1);i.useEffect(()=>{const l=()=>M(window.innerWidth<768);return l(),window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)},[]);const P=o<re?`/audio/slide${o}.ogg`:null;i.useEffect(()=>{if(r(!1),f(0),c(0),S(!1),t.current=!0,!P){y(!1);return}y(!0);const l=p.current;l&&(l.pause(),l.src=P,l.volume=n,l.load())},[o]),i.useEffect(()=>{p.current&&(p.current.volume=n)},[n]);const O=()=>{const l=p.current;l&&(c(l.duration||0),S(!0),t.current&&(t.current=!1,l.play().then(()=>r(!0)).catch(()=>r(!1))))},_=i.useCallback(()=>{const l=p.current;!l||!b||(a?(l.pause(),r(!1)):(l.play().catch(()=>{}),r(!0)))},[a,b]),W=l=>{const x=p.current;if(!x||!s)return;const T=l.currentTarget.getBoundingClientRect();x.currentTime=Math.max(0,Math.min(1,(l.clientX-T.left)/T.width))*s,f(x.currentTime)},V=()=>{const l=p.current;l&&(l.currentTime=0,f(0),l.play().catch(()=>{}),r(!0))},H=s>0?u/s*100:0,B=te[o]||`Slide ${o+1}`;return e.jsxs(e.Fragment,{children:[e.jsx("audio",{ref:p,onLoadedMetadata:O,onTimeUpdate:()=>{var l;return f(((l=p.current)==null?void 0:l.currentTime)||0)},onEnded:()=>{r(!1),f(0);const l=document.querySelectorAll(".slide-section");o+1<l.length&&l[o+1].scrollIntoView({behavior:"smooth"})},preload:"auto"}),e.jsx(I,{children:g&&e.jsxs(k.div,{initial:{opacity:0,scale:.93,y:16},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.93,y:16},transition:{type:"spring",stiffness:320,damping:28},style:{position:"fixed",bottom:88,zIndex:400,width:C?"calc(100% - 40px)":280,maxWidth:320,left:C?"50%":"auto",right:C?"auto":20,transform:C?"translateX(-50%)":"none",background:"rgba(255,255,255,0.05)",backdropFilter:"blur(16px)",borderRadius:20,border:"1px solid rgba(255,255,255,0.1)",boxShadow:"0 24px 72px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.05)",padding:"16px",display:"flex",flexDirection:"column",gap:12},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx("div",{style:{display:"flex",alignItems:"center",gap:2,height:18},children:[1,2,3,4,5].map((l,x)=>e.jsx(k.span,{style:{display:"inline-block",width:3,borderRadius:2,background:a?h.accent3:"rgba(101,154,211,0.3)"},animate:a?{height:[3,14+x*2,3]}:{height:3},transition:a?{repeat:1/0,duration:.42+x*.07,delay:x*.07}:{}},x))}),e.jsx("span",{style:{color:h.accent3,fontWeight:700,fontSize:13},children:"Voice Over"})]}),e.jsx("button",{onClick:d,style:{background:"none",border:"none",cursor:"pointer",color:h.muted,padding:2},children:e.jsx(D,{size:15})})]}),e.jsxs("div",{style:{color:h.text,fontSize:11,textAlign:"center",padding:"5px 10px",background:"rgba(101,154,211,0.07)",borderRadius:8,border:`1px solid ${h.border}`},children:["🎙️ ",B]}),e.jsx("div",{onClick:b?W:void 0,style:{height:4,borderRadius:2,background:"rgba(101,154,211,0.12)",cursor:b?"pointer":"default",position:"relative",overflow:"hidden"},children:e.jsx(k.div,{style:{position:"absolute",left:0,top:0,bottom:0,width:`${H}%`,background:`linear-gradient(90deg,${h.accent1},${h.purple})`,borderRadius:2},transition:{duration:.1}})}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:10,color:h.muted},children:[e.jsx("span",{children:z(u)}),e.jsx("span",{children:z(s)})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:12},children:[e.jsx("button",{onClick:V,disabled:!b,style:{background:"rgba(101,154,211,0.10)",border:`1px solid ${h.border}`,borderRadius:10,width:36,height:36,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:h.accent2,opacity:b?1:.35},children:e.jsx(N,{size:14})}),e.jsx("button",{onClick:_,disabled:!b||!v,style:{background:b&&v?`linear-gradient(135deg,${h.accent1},${h.purple})`:"rgba(101,154,211,0.10)",border:"none",borderRadius:14,width:50,height:50,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",opacity:b&&v?1:.35,boxShadow:b&&v?"0 4px 18px rgba(11,103,201,0.45)":"none"},children:a?e.jsx(U,{size:22}):e.jsx($,{size:22,style:{marginLeft:2}})}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5},children:[e.jsx(q,{size:12,color:h.muted}),e.jsx("input",{type:"range",min:0,max:1,step:.02,value:n,onChange:l=>m(Number(l.target.value)),style:{width:50,height:3,accentColor:h.accent3,cursor:"pointer"}})]})]})]})})]})}const ne=["What is a Pointer?","Explain malloc()","How does struct work?","What is recursion?","Explain for loop","What are arrays?","Explain functions in C","What are data types?","How do strings work?","What is a typedef?","Explain enums","What is a union?","File I/O in C","Preprocessor macros","Operators in C","What are variables?","If else in C","Switch statement","Scope of variables","Type casting in C","What is stack vs heap?","Memory leak in C","Bitwise operators","Command line arguments","Function pointers","Linked list in C","Sorting in C","printf and scanf","Header files in C","How to compile C?","const keyword","goto statement","Error handling in C","Math functions in C","Static keyword","Global variables","Pass by reference","2D arrays","String formatting"],oe=[{keys:["hello world","hello","first program","basic program","get started"],title:"Hello World — Your First C Program",html:`<strong class="kw">Every C program</strong> starts with <code class="ic">main()</code>. Here's the classic first program:

<pre class="cb">#include &lt;stdio.h&gt;   // standard I/O library

int main() {
    printf("Hello, World!\\n");  // print to console
    return 0;  // 0 = success
}</pre>
<strong class="kw">Compile &amp; run:</strong>
<pre class="cb">gcc hello.c -o hello   // compile
./hello                // run → Hello, World!</pre>
<strong class="kw">Key points:</strong><br/>• <code class="ic">#include &lt;stdio.h&gt;</code> gives you <code class="ic">printf</code> and <code class="ic">scanf</code><br/>• Every statement ends with <code class="ic">;</code><br/>• <code class="ic">\\n</code> is a newline character<br/>• <code class="ic">main</code> must return an <code class="ic">int</code>`},{keys:["pointer","pointers","ptr","dereference","address","null pointer"],title:"Pointers in C",html:`<strong class="kw">Pointers</strong> store the memory address of another variable. They are one of C's most powerful features.<br/><br/><strong class="kw">Declaration:</strong> <code class="ic">type *name;</code><br/><strong class="kw">Address-of operator:</strong> <code class="ic">&amp;</code> — gets a variable's address<br/><strong class="kw">Dereference operator:</strong> <code class="ic">*</code> — accesses the value at an address

<pre class="cb">#include &lt;stdio.h&gt;
int main() {
    int x = 10;
    int *p = &amp;x;   // p holds address of x

    printf("Value:   %d\\n", *p);  // 10
    printf("Address: %p\\n",  p);  // memory address

    *p = 99;       // modify x through the pointer
    printf("x is now: %d\\n", x); // 99
    return 0;
}</pre>
<strong class="kw">Key rules:</strong> Always initialise pointers before use. A <em>null pointer</em> (<code class="ic">NULL</code>) points to nothing — always check before dereferencing.`},{keys:["malloc","calloc","realloc","free","dynamic memory","heap","memory allocation"],title:"Dynamic Memory — malloc / calloc / free",html:`<strong class="kw">Dynamic memory</strong> lets you allocate memory at runtime from the heap.

<pre class="cb">#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

int main() {
    int *arr = (int*) malloc(5 * sizeof(int));
    if (arr == NULL) { printf("Allocation failed!\\n"); return 1; }

    for (int i = 0; i &lt; 5; i++) arr[i] = i * 10;
    for (int i = 0; i &lt; 5; i++) printf("%d ", arr[i]);

    free(arr);  // always free!
    return 0;
}</pre>
<strong class="kw">Functions:</strong><br/>• <code class="ic">malloc(size)</code> — allocates bytes, uninitialized<br/>• <code class="ic">calloc(n, size)</code> — allocates n×size bytes, zeroed<br/>• <code class="ic">realloc(ptr, size)</code> — resizes an existing allocation<br/>• <code class="ic">free(ptr)</code> — releases memory back to the OS`},{keys:["struct","structure","structures","record"],title:"Structs in C",html:`A <strong class="kw">struct</strong> groups related variables of different types under one name.

<pre class="cb">#include &lt;stdio.h&gt;

struct Student {
    char  name[50];
    int   age;
    float gpa;
};

int main() {
    struct Student s = {"Alice", 21, 3.9};
    printf("Name: %s, GPA: %.1f\\n", s.name, s.gpa);

    struct Student *sp = &amp;s;
    printf("Age via pointer: %d\\n", sp-&gt;age);
    return 0;
}</pre>
<strong class="kw">Tip:</strong> Use <code class="ic">typedef</code> to avoid typing <code class="ic">struct</code> every time:
<pre class="cb">typedef struct { int x; int y; } Point;
Point p = {3, 7};</pre>`},{keys:["recursion","recursive","base case","factorial","fibonacci"],title:"Recursion in C",html:`<strong class="kw">Recursion</strong> is when a function calls itself. Every recursive function needs a <em>base case</em> to stop.

<pre class="cb">#include &lt;stdio.h&gt;

int factorial(int n) {
    if (n &lt;= 1) return 1;          // base case
    return n * factorial(n - 1);   // recursive call
}

int main() {
    printf("5! = %d\\n", factorial(5)); // 120
    return 0;
}</pre>
<strong class="kw">Warning:</strong> Too many recursive calls causes a <em>stack overflow</em>. For large inputs, prefer iteration or memoization.`},{keys:["for","loop","loops","while","do while","iteration","iterate"],title:"Loops in C",html:`C has <strong class="kw">three loop types</strong>:

<pre class="cb">#include &lt;stdio.h&gt;
int main() {
    // 1. for loop
    for (int i = 0; i &lt; 5; i++)
        printf("for: %d\\n", i);

    // 2. while loop
    int j = 0;
    while (j &lt; 3) { printf("while: %d\\n", j); j++; }

    // 3. do-while — runs at least once
    int k = 0;
    do { printf("do-while: %d\\n", k); k++; } while (k &lt; 2);
    return 0;
}</pre>
<strong class="kw">Loop control:</strong><br/>• <code class="ic">break</code> — exits the loop immediately<br/>• <code class="ic">continue</code> — skips to the next iteration`},{keys:["array","arrays","index","element","subscript","2d array"],title:"Arrays in C",html:`An <strong class="kw">array</strong> stores multiple values of the same type in contiguous memory.

<pre class="cb">#include &lt;stdio.h&gt;
int main() {
    int nums[5] = {10, 20, 30, 40, 50};
    printf("First: %d\\n", nums[0]);  // 10
    for (int i = 0; i &lt; 5; i++) printf("%d ", nums[i]);

    int grid[3][4] = {{1,2,3,4},{5,6,7,8},{9,10,11,12}};
    printf("\\ngrid[1][2] = %d\\n", grid[1][2]); // 7
    return 0;
}</pre>
<strong class="kw">Important:</strong> Arrays don't store their own length — always track the size. Out-of-bounds access is <em>undefined behaviour</em>.`},{keys:["function","functions","parameter","argument","return","prototype","void"],title:"Functions in C",html:`<strong class="kw">Functions</strong> break code into reusable, named blocks.

<pre class="cb">#include &lt;stdio.h&gt;

int add(int a, int b);
void greet(char *name);

int main() {
    printf("Sum: %d\\n", add(3, 7));  // 10
    greet("Alice");
    return 0;
}

int add(int a, int b) { return a + b; }
void greet(char *name) { printf("Hello, %s!\\n", name); }</pre>
<strong class="kw">C passes arguments by value</strong> — a copy is made. To modify the original, pass a pointer:
<pre class="cb">void increment(int *n) { (*n)++; }</pre>`},{keys:["data type","data types","int","float","double","char","long","short","unsigned","sizeof"],title:"Data Types in C",html:`<strong class="kw">Basic data types</strong> in C:

<pre class="cb">int    a = 42;           // integer      (4 bytes)
float  b = 3.14f;        // float        (4 bytes)
double c = 3.14159265;   // double prec. (8 bytes)
char   d = 'A';          // character    (1 byte)
long   e = 1234567890L;  // large int
unsigned int f = 300;    // non-negative only</pre>
<strong class="kw">Format specifiers:</strong><br/>• <code class="ic">%d</code> int &nbsp;• <code class="ic">%f</code> float &nbsp;• <code class="ic">%lf</code> double<br/>• <code class="ic">%c</code> char &nbsp;• <code class="ic">%s</code> string &nbsp;• <code class="ic">%p</code> pointer`},{keys:["string","strings","char array","strlen","strcpy","strcmp","strcat"],title:"Strings in C",html:`In C, a <strong class="kw">string</strong> is a null-terminated (<code class="ic">\\0</code>) array of <code class="ic">char</code>.

<pre class="cb">#include &lt;string.h&gt;

char s1[] = "Hello";
char s2[20] = "World";

strlen(s1)     // 5
strcmp(s1,s2)  // nonzero (not equal)
strcat(s2,"!") // s2 = "World!"
strcpy(s3, s1) // copy "Hello" into s3</pre>
<strong class="kw">Common functions</strong> from <code class="ic">&lt;string.h&gt;</code>:<br/><code class="ic">strlen</code> · <code class="ic">strcpy</code> · <code class="ic">strcat</code> · <code class="ic">strcmp</code> · <code class="ic">strtok</code>`},{keys:["typedef","type definition","alias","type alias"],title:"typedef in C",html:`<strong class="kw">typedef</strong> creates an alias for an existing type.

<pre class="cb">typedef unsigned int uint;
typedef struct {
    int x;
    int y;
} Point;

uint  count = 42;
Point p     = {3, 7};
printf("Point: (%d, %d)\\n", p.x, p.y);</pre>
<strong class="kw">Benefit:</strong> Write <code class="ic">Point p;</code> instead of <code class="ic">struct Point p;</code> every time.`},{keys:["enum","enums","enumeration","named constant"],title:"Enums in C",html:`An <strong class="kw">enum</strong> defines a set of named integer constants.

<pre class="cb">typedef enum {
    MON = 0, TUE, WED, THU, FRI, SAT, SUN
} Day;

Day today = WED;
if (today == WED) printf("Midweek!\\n");</pre>
<strong class="kw">Tip:</strong> Enums make switch-case statements far more readable than magic numbers.`},{keys:["union","unions","shared memory"],title:"Unions in C",html:`A <strong class="kw">union</strong> is like a struct, but all members share the same memory.

<pre class="cb">union Data {
    int   i;
    float f;
    char  c;
};

union Data d;
d.i = 42;    printf("Int: %d\\n", d.i);
d.f = 3.14f; printf("Float: %.2f\\n", d.f); // overwrites d.i!</pre>
<strong class="kw">Use case:</strong> Unions save memory when you store different types but only one at a time.`},{keys:["file","files","fopen","fclose","fread","fwrite","fprintf","fscanf","file io","file i/o"],title:"File I/O in C",html:`C uses <code class="ic">FILE*</code> pointers and functions from <code class="ic">&lt;stdio.h&gt;</code>.

<pre class="cb">// Write to file
FILE *fp = fopen("data.txt", "w");
fprintf(fp, "Hello, file!\\n");
fclose(fp);

// Read back
fp = fopen("data.txt", "r");
char line[100];
while (fgets(line, sizeof(line), fp))
    printf("%s", line);
fclose(fp);</pre>
<strong class="kw">File modes:</strong><br/>• <code class="ic">"r"</code> read &nbsp;• <code class="ic">"w"</code> write &nbsp;• <code class="ic">"a"</code> append<br/><strong class="kw">Always</strong> check for <code class="ic">NULL</code> and call <code class="ic">fclose</code>.`},{keys:["preprocessor","macro","#define","#include","#ifdef","#ifndef","#endif","directive"],title:"Preprocessor Directives",html:`The <strong class="kw">preprocessor</strong> runs before compilation, processing directives that start with <code class="ic">#</code>.

<pre class="cb">#define PI      3.14159
#define MAX(a,b) ((a) &gt; (b) ? (a) : (b))
#define DEBUG   1

printf("Area: %.2f\\n", PI * 5 * 5);  // 78.54
printf("Max:  %d\\n",   MAX(10, 20)); // 20

#ifdef DEBUG
    printf("[DEBUG] debug mode on\\n");
#endif</pre>
<strong class="kw">Common directives:</strong><br/><code class="ic">#include</code> · <code class="ic">#define</code> · <code class="ic">#ifdef</code> · <code class="ic">#pragma once</code>`},{keys:["operator","operators","arithmetic","logical","comparison","increment","decrement"],title:"Operators in C",html:`<strong class="kw">C operators</strong> by category:

<pre class="cb">// Arithmetic:  + - * / %
int rem = 10 % 3;        // 1

// Comparison:  == != &lt; &gt; &lt;= &gt;=
int eq = (5 == 5);       // 1 (true)

// Logical:     &amp;&amp; || !
int ok = (x &gt; 0 &amp;&amp; x &lt; 100);

// Increment / Decrement
n++;   // post-increment
++n;   // pre-increment</pre>
<strong class="kw">Precedence:</strong> <code class="ic">*</code> <code class="ic">/</code> before <code class="ic">+</code> <code class="ic">-</code>. Use parentheses when in doubt.`},{keys:["variable","variables","declare","declaration","assign","assignment","initialize"],title:"Variables in C",html:`A <strong class="kw">variable</strong> is a named storage location in memory. You must <em>declare</em> a type before using it.

<pre class="cb">#include &lt;stdio.h&gt;
int main() {
    int   age    = 20;       // integer
    float height = 5.9f;     // floating point
    char  grade  = 'A';      // single character
    int   uninit;            // ⚠️ garbage value!

    printf("Age: %d, Height: %.1f, Grade: %c\\n",
            age, height, grade);
    return 0;
}</pre>
<strong class="kw">Rules:</strong><br/>• Variable names start with a letter or <code class="ic">_</code><br/>• Case-sensitive: <code class="ic">count</code> ≠ <code class="ic">Count</code><br/>• Always initialise before use`},{keys:["if","if else","else if","conditional","conditionals","condition","branching"],title:"If / Else — Conditionals in C",html:`<strong class="kw">Conditionals</strong> let your program make decisions.

<pre class="cb">#include &lt;stdio.h&gt;
int main() {
    int score = 75;

    if (score &gt;= 90) {
        printf("Grade: A\\n");
    } else if (score &gt;= 70) {
        printf("Grade: B\\n");  // ← this runs
    } else if (score &gt;= 50) {
        printf("Grade: C\\n");
    } else {
        printf("Grade: F\\n");
    }
    return 0;
}</pre>
<strong class="kw">Tip:</strong> The condition inside <code class="ic">if()</code> evaluates to <code class="ic">1</code> (true) or <code class="ic">0</code> (false). Any non-zero value is truthy.`},{keys:["switch","switch case","case","default","break switch"],title:"Switch Statement in C",html:`<strong class="kw">switch</strong> selects one of many blocks based on a value — cleaner than a long if-else chain.

<pre class="cb">#include &lt;stdio.h&gt;
int main() {
    int day = 3;
    switch (day) {
        case 1: printf("Monday\\n");    break;
        case 2: printf("Tuesday\\n");   break;
        case 3: printf("Wednesday\\n"); break; // ← runs
        case 4: printf("Thursday\\n");  break;
        default: printf("Weekend!\\n"); break;
    }
    return 0;
}</pre>
<strong class="kw">⚠️ Always add <code class="ic">break</code></strong> — without it, execution "falls through" to the next case.`},{keys:["scope","scope of variables","local","global variable","block scope","lifetime"],title:"Scope of Variables in C",html:`<strong class="kw">Scope</strong> determines where a variable can be accessed.

<pre class="cb">#include &lt;stdio.h&gt;

int globalVar = 100;  // 🌍 accessible everywhere

void demo() {
    int localVar = 42;  // 📍 only inside demo()
    printf("local: %d, global: %d\\n", localVar, globalVar);
}

int main() {
    demo();
    // printf("%d", localVar); // ❌ Error: not in scope
    printf("global: %d\\n", globalVar); // ✅
    return 0;
}</pre>
<strong class="kw">Rules:</strong><br/>• <strong class="kw">Local:</strong> declared inside <code class="ic">{ }</code>, exists only there<br/>• <strong class="kw">Global:</strong> declared outside all functions, lives until program ends`},{keys:["type cast","type casting","cast","casting","implicit","explicit conversion"],title:"Type Casting in C",html:`<strong class="kw">Type casting</strong> converts a value from one type to another.

<pre class="cb">#include &lt;stdio.h&gt;
int main() {
    int   a = 7, b = 2;
    float result;

    result = a / b;          // ❌  3.0 (integer division!)
    result = (float)a / b;   // ✅  3.5 (explicit cast)

    double pi = 3.14159;
    int trunc = (int)pi;     // 3  (drops decimal)

    char c = 65;
    printf("%c\\n", c);        // A  (int → char)
    return 0;
}</pre>
<strong class="kw">Rule:</strong> When mixing <code class="ic">int</code> and <code class="ic">float</code>, cast explicitly to avoid silent bugs.`},{keys:["stack","heap","stack vs heap","memory model","memory layout","stack overflow"],title:"Stack vs Heap Memory",html:`C programs use two main memory regions:

<pre class="cb">┌───────────────────┐
│   Stack (LIFO)    │ ← local variables, function calls
│   fast, limited   │   auto-cleaned when function returns
├───────────────────┤
│   Heap            │ ← malloc/calloc allocations
│   large, manual   │   YOU must call free()
└───────────────────┘</pre>
<pre class="cb">void func() {
    int x = 5;          // stack — auto freed
    int *p = malloc(4); // heap  — must free
    free(p);            // ✅ release heap memory
}</pre>
<strong class="kw">Stack overflow</strong> occurs when too many recursive calls exhaust stack space.`},{keys:["memory leak","leak","valgrind","forget free","memory management"],title:"Memory Leaks in C",html:`A <strong class="kw">memory leak</strong> happens when heap memory is allocated but never freed.

<pre class="cb">// ❌ LEAK — malloc without free
void leaky() {
    int *p = malloc(100 * sizeof(int));
    // forgot free(p)!
}

// ✅ CORRECT
void proper() {
    int *p = malloc(100 * sizeof(int));
    if (!p) return;
    // ... use p ...
    free(p);  // always free!
    p = NULL; // avoid dangling pointer
}</pre>
<strong class="kw">Detection:</strong> Use <code class="ic">valgrind --leak-check=full ./program</code> to find leaks.`},{keys:["bitwise","bitwise operator","bit manipulation","shift","xor","and or","not bit"],title:"Bitwise Operators in C",html:`<strong class="kw">Bitwise operators</strong> work directly on binary bits — used in systems programming and flags.

<pre class="cb">#include &lt;stdio.h&gt;
int main() {
    int a = 0b1010;  // 10
    int b = 0b1100;  // 12

    printf("AND:  %d\\n", a &amp; b);   // 0b1000 = 8
    printf("OR:   %d\\n", a | b);   // 0b1110 = 14
    printf("XOR:  %d\\n", a ^ b);   // 0b0110 = 6
    printf("NOT:  %d\\n", ~a);      // -11
    printf("SHL:  %d\\n", a &lt;&lt; 1);  // 20 (×2)
    printf("SHR:  %d\\n", a &gt;&gt; 1);  // 5  (÷2)
    return 0;
}</pre>
<strong class="kw">Common uses:</strong> setting flags, permissions, packing data into bytes.`},{keys:["command line","argv","argc","command line arguments","main arguments"],title:"Command Line Arguments",html:`<strong class="kw"><code class="ic">argc</code></strong> (argument count) and <strong class="kw"><code class="ic">argv</code></strong> (argument vector) let you pass values when running a program.

<pre class="cb">#include &lt;stdio.h&gt;

int main(int argc, char *argv[]) {
    printf("Program: %s\\n", argv[0]);   // program name
    printf("Args:    %d\\n", argc - 1);  // number of args

    for (int i = 1; i &lt; argc; i++) {
        printf("arg[%d] = %s\\n", i, argv[i]);
    }
    return 0;
}</pre>
<strong class="kw">Run as:</strong> <code class="ic">./program hello world</code><br/>Output: <code class="ic">arg[1] = hello</code>, <code class="ic">arg[2] = world</code>`},{keys:["function pointer","function pointers","callback","pointer to function"],title:"Function Pointers in C",html:`A <strong class="kw">function pointer</strong> stores the address of a function — enabling callbacks and dynamic dispatch.

<pre class="cb">#include &lt;stdio.h&gt;

int add(int a, int b) { return a + b; }
int mul(int a, int b) { return a * b; }

int main() {
    int (*op)(int, int);   // declare function pointer

    op = add;
    printf("add: %d\\n", op(3, 4));  // 7

    op = mul;
    printf("mul: %d\\n", op(3, 4));  // 12
    return 0;
}</pre>
<strong class="kw">Use case:</strong> <code class="ic">qsort()</code> takes a comparator function pointer as an argument.`},{keys:["linked list","linkedlist","node","singly linked","doubly linked","next pointer"],title:"Linked List in C",html:`A <strong class="kw">linked list</strong> is a chain of nodes where each holds data and a pointer to the next node.

<pre class="cb">#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

typedef struct Node {
    int         data;
    struct Node *next;
} Node;

Node* create(int val) {
    Node *n = malloc(sizeof(Node));
    n-&gt;data = val;
    n-&gt;next = NULL;
    return n;
}

int main() {
    Node *head = create(10);
    head-&gt;next = create(20);
    head-&gt;next-&gt;next = create(30);

    for (Node *p = head; p; p = p-&gt;next)
        printf("%d → ", p-&gt;data);  // 10 → 20 → 30
    return 0;
}</pre>
<strong class="kw">Vs Array:</strong> O(1) insertion/deletion but no random access.`},{keys:["sorting","sort","bubble sort","selection sort","qsort","insertion sort"],title:"Sorting in C",html:`C has <strong class="kw">built-in <code class="ic">qsort()</code></strong> and you can implement classic sorts manually.

<pre class="cb">#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

int cmp(const void *a, const void *b) {
    return *(int*)a - *(int*)b;
}

int main() {
    int arr[] = {5, 2, 8, 1, 9};
    int n = 5;
    qsort(arr, n, sizeof(int), cmp);
    for (int i = 0; i &lt; n; i++)
        printf("%d ", arr[i]);  // 1 2 5 8 9
    return 0;
}</pre>
<strong class="kw">Bubble Sort:</strong>
<pre class="cb">for (int i=0;i&lt;n-1;i++)
  for (int j=0;j&lt;n-1-i;j++)
    if (arr[j]&gt;arr[j+1]){
      int t=arr[j];arr[j]=arr[j+1];arr[j+1]=t;
    }</pre>`},{keys:["printf","scanf","format specifier","input output","stdin","stdout","print"],title:"printf & scanf — Input/Output",html:`<strong class="kw"><code class="ic">printf</code></strong> outputs to console; <strong class="kw"><code class="ic">scanf</code></strong> reads user input.

<pre class="cb">#include &lt;stdio.h&gt;
int main() {
    int age;
    char name[50];

    printf("Enter your name: ");
    scanf("%49s", name);

    printf("Enter your age: ");
    scanf("%d", &amp;age);   // note the &amp; ← address of age

    printf("Hi %s! You are %d years old.\\n", name, age);
    return 0;
}</pre>
<strong class="kw">Format specifiers:</strong><br/><code class="ic">%d</code> int &nbsp;• <code class="ic">%f</code> float &nbsp;• <code class="ic">%s</code> string<br/><code class="ic">%c</code> char &nbsp;• <code class="ic">%lf</code> double &nbsp;• <code class="ic">%%</code> literal %`},{keys:["header file","header files","#include","custom header",".h file","library"],title:"Header Files in C",html:`<strong class="kw">Header files</strong> (<code class="ic">.h</code>) share prototypes, macros, and types across multiple <code class="ic">.c</code> files.

<pre class="cb">// mymath.h
#ifndef MYMATH_H
#define MYMATH_H
int square(int n);
int cube(int n);
#endif</pre>
<pre class="cb">// mymath.c
#include "mymath.h"
int square(int n) { return n * n; }
int cube(int n)   { return n * n * n; }</pre>
<pre class="cb">// main.c
#include &lt;stdio.h&gt;
#include "mymath.h"
int main() {
    printf("%d\\n", square(5)); // 25
    return 0;
}</pre>
<strong class="kw">Always use include guards</strong> (<code class="ic">#ifndef</code>) to prevent double-inclusion.`},{keys:["compile","compilation","gcc","how to compile","build","linker","object file"],title:"How to Compile a C Program",html:`<strong class="kw">GCC</strong> is the most popular C compiler.

<pre class="cb"># Basic compilation
gcc main.c -o main
./main

# With warnings (recommended)
gcc -Wall -Wextra main.c -o main

# Multiple source files
gcc main.c mymath.c -o app

# Debug mode
gcc -g main.c -o main_debug

# Optimised build
gcc -O2 main.c -o main_fast</pre>
<strong class="kw">4 Compilation phases:</strong><br/>1️⃣ Preprocessing (<code class="ic">#include</code>, <code class="ic">#define</code>)<br/>2️⃣ Compilation → assembly<br/>3️⃣ Assembly → object file (<code class="ic">.o</code>)<br/>4️⃣ Linking → executable`},{keys:["const","constant","const keyword","read only","immutable"],title:"const Keyword in C",html:`<strong class="kw"><code class="ic">const</code></strong> marks a variable as read-only — the compiler errors if you try to modify it.

<pre class="cb">#include &lt;stdio.h&gt;

const float PI  = 3.14159f;
const int   MAX = 100;

int main() {
    // PI = 3.0;  ❌ error: read-only variable
    printf("PI = %.5f, MAX = %d\\n", PI, MAX);

    int value = 42;
    const int *ptr1 = &amp;value;   // can't change *ptr1
    int *const ptr2 = &amp;value;   // can't change ptr2 itself
    return 0;
}</pre>
<strong class="kw">Best practice:</strong> Prefer <code class="ic">const</code> over <code class="ic">#define</code> for typed constants — it's type-safe.`},{keys:["goto","goto statement","jump","label"],title:"goto Statement in C",html:`<strong class="kw"><code class="ic">goto</code></strong> jumps unconditionally to a labelled statement within the same function.

<pre class="cb">#include &lt;stdio.h&gt;
int main() {
    int i = 0;
loop:                        // ← label
    if (i &lt; 5) {
        printf("%d ", i++);   // 0 1 2 3 4
        goto loop;           // jump back
    }
    printf("\\nDone!\\n");
    return 0;
}</pre>
<strong class="kw">⚠️ Avoid <code class="ic">goto</code></strong> in most cases — the only accepted use is cleanup in error handling or breaking deeply nested loops.`},{keys:["error handling","errno","perror","exit","error code","return code"],title:"Error Handling in C",html:`C has no exceptions — errors are handled through <strong class="kw">return values</strong>, <code class="ic">errno</code>, and <code class="ic">perror()</code>.

<pre class="cb">#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;
#include &lt;errno.h&gt;
#include &lt;string.h&gt;

int main() {
    FILE *fp = fopen("missing.txt", "r");
    if (fp == NULL) {
        perror("fopen");          // prints system error
        printf("Error: %s\\n", strerror(errno));
        return EXIT_FAILURE;    // = 1
    }
    fclose(fp);
    return EXIT_SUCCESS;        // = 0
}</pre>
<strong class="kw">Pattern:</strong> Always check return values of <code class="ic">malloc</code>, <code class="ic">fopen</code>, <code class="ic">scanf</code>.`},{keys:["math","math library","math functions","sqrt","pow","fabs","ceil","floor","sin cos"],title:"Math Functions in C",html:`Include <code class="ic">&lt;math.h&gt;</code> and link with <code class="ic">-lm</code> for mathematical functions.

<pre class="cb">#include &lt;stdio.h&gt;
#include &lt;math.h&gt;

int main() {
    printf("sqrt(16) = %.2f\\n", sqrt(16));   // 4.00
    printf("pow(2,10) = %.0f\\n", pow(2,10)); // 1024
    printf("fabs(-5)  = %.1f\\n", fabs(-5));  // 5.0
    printf("ceil(3.2) = %.1f\\n", ceil(3.2)); // 4.0
    printf("floor(3.9)= %.1f\\n", floor(3.9));// 3.0
    printf("sin(0)    = %.1f\\n", sin(0));    // 0.0
    return 0;
}</pre>
<strong class="kw">Compile with:</strong> <code class="ic">gcc main.c -lm -o main</code>`},{keys:["static","static keyword","static variable","static function"],title:"static Keyword in C",html:`<strong class="kw"><code class="ic">static</code></strong> has two meanings depending on context:

<pre class="cb">// 1. Static LOCAL variable — keeps value between calls
#include &lt;stdio.h&gt;
void counter() {
    static int count = 0;  // initialised only once
    count++;
    printf("count = %d\\n", count);
}
int main() {
    counter(); // count = 1
    counter(); // count = 2
    counter(); // count = 3
    return 0;
}</pre>
<pre class="cb">// 2. Static GLOBAL/FUNCTION — limits scope to the file
static int helper_var = 0;       // hidden from other .c files
static void internal_func() { }  // not visible externally</pre>`},{keys:["pass by reference","pass by value","call by reference","address parameter"],title:"Pass by Value vs Pass by Reference",html:`C is <strong class="kw">always pass-by-value</strong> — but you can simulate pass-by-reference using pointers.

<pre class="cb">#include &lt;stdio.h&gt;

// Pass by VALUE — original unchanged
void doubleVal(int x) {
    x *= 2;   // only changes local copy
}

// Pass by REFERENCE — original modified
void doubleRef(int *x) {
    *x *= 2;  // modifies the actual variable
}

int main() {
    int n = 5;
    doubleVal(n);  printf("%d\\n", n); // 5  (unchanged)
    doubleRef(&amp;n); printf("%d\\n", n); // 10 (modified!)
    return 0;
}</pre>
<strong class="kw">Rule:</strong> To modify a variable inside a function, pass its address with <code class="ic">&amp;</code> and use <code class="ic">*</code> inside.`},{keys:["2d array","two dimensional","matrix","multidimensional","2d arrays"],title:"2D Arrays & Matrices in C",html:`A <strong class="kw">2D array</strong> stores data in rows and columns (like a table or matrix).

<pre class="cb">#include &lt;stdio.h&gt;
int main() {
    int mat[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };

    for (int r = 0; r &lt; 3; r++) {
        for (int c = 0; c &lt; 3; c++)
            printf("%3d", mat[r][c]);
        printf("\\n");
    }
    printf("Centre: %d\\n", mat[1][1]); // 5
    return 0;
}</pre>
<strong class="kw">Memory:</strong> 2D arrays are stored row-by-row (row-major order) in a contiguous block.`},{keys:["string format","string formatting","sprintf","snprintf","format string"],title:"String Formatting — sprintf & snprintf",html:`<strong class="kw"><code class="ic">sprintf</code></strong> formats a string into a char buffer — like <code class="ic">printf</code> but writes to a string.

<pre class="cb">#include &lt;stdio.h&gt;
int main() {
    char buf[100];
    int  score = 95;
    char name[]= "Alice";

    // sprintf — write to buffer
    sprintf(buf, "Player: %s, Score: %d", name, score);
    printf("%s\\n", buf);  // Player: Alice, Score: 95

    // snprintf — safe: limits characters written
    snprintf(buf, sizeof(buf), "Score: %05d", score);
    printf("%s\\n", buf);  // Score: 00095
    return 0;
}</pre>
<strong class="kw">Best practice:</strong> Always use <code class="ic">snprintf</code> to prevent buffer overflow.`}];function ie(o){const g=o.toLowerCase();let d=null,p=0;for(const t of oe){let a=0;for(const r of t.keys)g.includes(r)&&(a+=r.length);a>p&&(p=a,d=t)}return d}function E(o){return o.replace(/\.kw/g,'style="color:#f5a000;font-weight:700"').replace(/\.ic/g,'style="background:rgba(245,160,0,.15);color:#f5a000;padding:1px 5px;border-radius:4px;font-family:monospace;font-size:11px"').replace(/\.cb/g,'style="background:#0d1117;color:#4ade80;padding:12px 14px;border-radius:10px;font-size:11px;margin:8px 0;overflow-x:auto;white-space:pre;font-family:monospace;border:1px solid #30363d;line-height:1.6;display:block"')}function F({size:o=16}){return e.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"#f5a000",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"11",width:"18",height:"10",rx:"2"}),e.jsx("circle",{cx:"12",cy:"5",r:"2"}),e.jsx("path",{d:"M12 7v4"}),e.jsx("line",{x1:"8",y1:"16",x2:"8",y2:"16",strokeWidth:"3"}),e.jsx("line",{x1:"16",y1:"16",x2:"16",y2:"16",strokeWidth:"3"})]})}function ae({size:o=13}){return e.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"#a5b4fc",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"12",cy:"7",r:"4"})]})}function ce({size:o=14}){return e.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),e.jsx("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]})}function le({isOpen:o,onToggle:g}){const[d,p]=i.useState(""),[t,a]=i.useState([{id:0,role:"bot",html:E('<strong class="kw">👋 Welcome to C Programming Tutor!</strong><br/><br/>100% offline · No API needed · Instant answers<br/><br/>Ask me about:<br/><strong class="kw">Variables · Data Types · Operators · If/Else · Switch · Loops · Arrays · 2D Arrays</strong><br/><strong class="kw">Functions · Recursion · Pointers · malloc · Structs · Strings · Typedef · Enums · Unions</strong><br/><strong class="kw">File I/O · Preprocessor · Scope · Type Casting · Stack vs Heap · Memory Leaks</strong><br/><strong class="kw">Bitwise Ops · argc/argv · Function Pointers · Linked Lists · Sorting · Header Files</strong><br/><strong class="kw">Compilation · const · goto · Error Handling · Math Library · Static · sprintf</strong><br/><br/>Click a chip below or type your question ↓')}]),r=i.useRef(null),s=i.useRef(null),[c,u]=i.useState(!1);i.useEffect(()=>{const n=()=>u(window.innerWidth<768);return n(),window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),i.useEffect(()=>{var n;(n=r.current)==null||n.scrollIntoView({behavior:"smooth"})},[t]),i.useEffect(()=>{o&&setTimeout(()=>{var n;return(n=s.current)==null?void 0:n.focus()},150)},[o]);const f=n=>{const m=(n??d).trim();if(!m)return;const b={id:Date.now(),role:"user",html:m.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")};a(y=>[...y,b]),p(""),setTimeout(()=>{const y=ie(m),v={id:Date.now()+1,role:"bot",html:y?`<strong style="color:#f5a000;font-weight:700">${y.title}</strong><br/><br/>${E(y.html)}`:E('I can answer questions about:<br/><strong class="kw">pointers · malloc · structs · recursion · loops · arrays · functions · data types · strings · typedef · enums · unions · file I/O · preprocessor · operators</strong><br/><br/>Try: <em>"What is a pointer?"</em> or click a suggestion below.')};a(S=>[...S,v])},180)};return e.jsx(I,{children:o&&e.jsxs(k.div,{initial:{opacity:0,scale:.93,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.93,y:20},transition:{type:"spring",stiffness:340,damping:28},style:{position:"fixed",bottom:88,zIndex:400,width:c?"calc(100% - 32px)":390,maxWidth:420,height:c?"calc(100vh - 120px)":580,maxHeight:700,left:c?"50%":"auto",right:c?"auto":20,transform:c?"translateX(-50%)":"none",background:"rgba(8,14,34,0.97)",backdropFilter:"blur(20px)",borderRadius:20,border:"1px solid rgba(245,160,0,0.22)",boxShadow:"0 24px 80px rgba(0,0,0,0.85), 0 0 0 1px rgba(245,160,0,0.08)",display:"flex",flexDirection:"column",overflow:"hidden",fontFamily:'"IBM Plex Mono","Fira Code",monospace',transition:"all 0.3s ease"},children:[e.jsx("style",{children:`
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
          `}),e.jsxs("div",{style:{padding:"12px 16px",display:"flex",alignItems:"center",gap:10,background:"linear-gradient(90deg,rgba(245,160,0,0.14),rgba(58,58,58,0.10))",borderBottom:"1px solid rgba(245,160,0,0.18)",flexShrink:0},children:[e.jsx("div",{style:{width:38,height:38,borderRadius:"50%",background:"linear-gradient(135deg,rgba(245,160,0,0.35),rgba(58,58,58,0.6))",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 14px rgba(245,160,0,0.35)",flexShrink:0,border:"1px solid rgba(245,160,0,0.3)"},children:e.jsx(F,{size:18})}),e.jsxs("div",{style:{flex:1},children:[e.jsx("div",{style:{color:"#fff",fontWeight:700,fontSize:13,letterSpacing:.3},children:"C Programming Tutor"}),e.jsxs("div",{style:{fontSize:10,color:"#f5a000",display:"flex",alignItems:"center",gap:5},children:[e.jsx("span",{style:{width:5,height:5,borderRadius:"50%",background:"#4ade80",display:"inline-block",boxShadow:"0 0 6px #4ade80"}}),"Static · Instant · Offline"]})]}),e.jsx("button",{onClick:g,style:{background:"rgba(245,160,0,0.1)",border:"1px solid rgba(245,160,0,0.25)",borderRadius:8,cursor:"pointer",color:"#f5a000",padding:"4px 6px",display:"flex",alignItems:"center"},children:e.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),e.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"14px 14px 8px",display:"flex",flexDirection:"column",gap:12},children:[t.map(n=>e.jsxs("div",{className:"cb-msg-row",style:{display:"flex",gap:8,flexDirection:n.role==="user"?"row-reverse":"row"},children:[e.jsx("div",{style:{width:28,height:28,borderRadius:"50%",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",background:n.role==="bot"?"linear-gradient(135deg,rgba(245,160,0,0.25),rgba(58,58,58,0.4))":"rgba(99,102,241,0.25)",border:`1px solid ${n.role==="bot"?"rgba(245,160,0,0.35)":"rgba(99,102,241,0.4)"}`},children:n.role==="bot"?e.jsx(F,{size:13}):e.jsx(ae,{})}),e.jsx("div",{style:{maxWidth:"82%",padding:"9px 12px",borderRadius:14,fontSize:12,lineHeight:1.7,...n.role==="user"?{background:"linear-gradient(135deg,#f5a000,#e07b00)",color:"#fff",borderTopRightRadius:4,boxShadow:"0 4px 16px rgba(245,160,0,0.3)"}:{background:"rgba(255,255,255,0.04)",color:"#c9dff7",border:"1px solid rgba(245,160,0,0.15)",borderTopLeftRadius:4}},dangerouslySetInnerHTML:{__html:n.html}})]},n.id)),e.jsx("div",{ref:r})]}),e.jsx("div",{style:{padding:"8px 12px",display:"flex",gap:6,overflowX:"auto",borderTop:"1px solid rgba(245,160,0,0.12)",flexShrink:0},children:ne.map(n=>e.jsx("button",{className:"cb-chip",onClick:()=>f(n),style:{flexShrink:0,fontSize:10,padding:"4px 10px",background:"rgba(245,160,0,0.08)",color:"#c9956a",border:"1px solid rgba(245,160,0,0.2)",borderRadius:20,cursor:"pointer",whiteSpace:"nowrap",transition:"all .15s",fontFamily:"inherit"},children:n},n))}),e.jsxs("div",{style:{padding:"10px 12px",borderTop:"1px solid rgba(245,160,0,0.12)",display:"flex",gap:8,flexShrink:0},children:[e.jsx("input",{ref:s,value:d,onChange:n=>p(n.target.value),onKeyDown:n=>n.key==="Enter"&&!n.shiftKey&&f(),placeholder:"Ask any C question...",style:{flex:1,padding:"9px 14px",borderRadius:12,fontSize:12,outline:"none",background:"rgba(245,160,0,0.05)",border:"1px solid rgba(245,160,0,0.2)",color:"#c9dff7",fontFamily:"inherit",transition:"border-color .2s"},onFocus:n=>{n.target.style.borderColor="rgba(245,160,0,0.55)"},onBlur:n=>{n.target.style.borderColor="rgba(245,160,0,0.2)"}}),e.jsx("button",{className:"cb-send",onClick:()=>f(),disabled:!d.trim(),style:{width:38,height:38,borderRadius:10,border:"none",cursor:"pointer",background:"linear-gradient(135deg,#f5a000,#e07b00)",display:"flex",alignItems:"center",justifyContent:"center",opacity:d.trim()?1:.4,transition:"opacity .2s, transform .15s",flexShrink:0},children:e.jsx(ce,{})})]})]},"chatbot-panel")})}const j={border:"rgba(101,154,211,0.22)",accent1:"#0b67c9",accent2:"#659AD3",accent3:"#42a5f5",purple:"#6366f1"},de=[{title:"Tutorial 1 — C Introduction",videoId:"Wy0WCzVsTXA",dur:"Video 1",level:"Beginner",desc:"What is C? History, features & why you should learn C programming",locked:!1},{title:"Tutorial 2 — Installation & Setup",videoId:"lRzg5XZwzR4",dur:"Video 2",level:"Beginner",desc:"Install compiler, set up VS Code & write your first Hello World program",locked:!1},{title:"Tutorial 3 — Structures & Variables",videoId:"cTyAQyfJ7ds",dur:"Video 3",level:"Intermediate",desc:"Understand data types, variables, constants and struct declarations in C",locked:!1},{title:"Tutorial 4 — Conditional Statements",videoId:"wRr288fC21I",dur:"Video 4",level:"Intermediate",desc:"Master if, else if, else, switch-case and ternary operators with examples",locked:!1},{title:"Tutorial 5 — Loops & Iteration",videoId:null,dur:"Video 5",level:"Premium",desc:"for, while, do-while loops, break & continue — Premium content",locked:!0},{title:"Tutorial 6 — Arrays & Strings",videoId:null,dur:"Video 6",level:"Premium",desc:"1D & 2D arrays, string functions from <string.h> — Premium content",locked:!0},{title:"Tutorial 7 — Functions & Recursion",videoId:null,dur:"Video 7",level:"Premium",desc:"Function prototypes, call by value, recursion & stack frames — Premium content",locked:!0},{title:"Tutorial 8 — Pointers & Memory",videoId:null,dur:"Video 8",level:"Premium",desc:"Pointer arithmetic, malloc, calloc, free & memory leaks — Premium content",locked:!0},{title:"Tutorial 9 — File Handling",videoId:null,dur:"Video 9",level:"Premium",desc:"fopen, fclose, fread, fwrite, fprintf & file modes — Premium content",locked:!0},{title:"Tutorial 10 — Advanced C Concepts",videoId:null,dur:"Video 10",level:"Premium",desc:"Linked lists, sorting algorithms, bitwise ops & preprocessor — Premium content",locked:!0}],pe={Beginner:{bg:"rgba(34,197,94,0.2)",text:"#4ade80"},Intermediate:{bg:"rgba(251,191,36,0.2)",text:"#fde047"},Advanced:{bg:"rgba(239,68,68,0.2)",text:"#f87171"},Premium:{bg:"rgba(245,160,0,0.22)",text:"#f5a000"}};function ue({onClose:o,isMobile:g}){const[d,p]=A.useState(null);return e.jsxs(k.div,{initial:{opacity:0,scale:.93,y:16},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.93,y:16},transition:{type:"spring",stiffness:320,damping:28},style:{position:"fixed",bottom:88,zIndex:400,width:g?"92vw":d?440:340,left:g?"50%":"auto",right:g?"auto":20,transform:g?"translateX(-50%)":"none",maxHeight:"calc(100vh - 120px)",background:"rgba(6,10,28,0.98)",backdropFilter:"blur(24px)",borderRadius:20,border:"1px solid rgba(239,68,68,0.4)",overflow:"hidden",display:"flex",flexDirection:"column",transition:"width 0.3s ease, left 0.3s ease, right 0.3s ease, transform 0.3s ease"},children:[e.jsxs("div",{style:{padding:"13px 16px",display:"flex",alignItems:"center",justifyContent:"space-between",background:"linear-gradient(90deg,rgba(239,68,68,0.25),rgba(185,28,28,0.12))",borderBottom:"1px solid rgba(239,68,68,0.2)",flexShrink:0},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx(L,{size:18,color:"#ef4444"}),e.jsxs("div",{children:[e.jsx("div",{style:{color:"#fff",fontWeight:700,fontSize:13},children:"CodingBoss Channel"}),e.jsx("div",{style:{color:"#ef4444",fontSize:10,marginTop:1},children:"▶ Click a video to play"})]})]}),e.jsx("button",{onClick:o,style:{background:"rgba(239,68,68,0.12)",border:"1px solid rgba(239,68,68,0.25)",borderRadius:8,cursor:"pointer",color:"#fca5a5",padding:"4px 6px",display:"flex",alignItems:"center"},children:e.jsx(D,{size:14})})]}),d&&e.jsxs("div",{style:{flexShrink:0,background:"#000",position:"relative"},children:[e.jsx("iframe",{src:`https://www.youtube.com/embed/${d}?autoplay=1&rel=0&modestbranding=1`,title:"CodingBoss Tutorial",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{width:"100%",height:220,border:"none",display:"block"}},d),e.jsx("button",{onClick:()=>p(null),style:{position:"absolute",top:8,right:8,background:"rgba(0,0,0,0.7)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:6,cursor:"pointer",color:"#fff",padding:"3px 8px",fontSize:11,fontWeight:600},children:"✕ Close Player"})]}),e.jsxs("div",{style:{overflowY:"auto",padding:"10px 12px",display:"flex",flexDirection:"column",gap:8,flex:1},children:[de.map((t,a)=>{const r=pe[t.level],s=d===t.videoId&&t.videoId!==null,c=t.locked;return e.jsxs(k.div,{whileHover:c?{}:{x:3},onClick:()=>!c&&p(s?null:t.videoId),style:{display:"flex",alignItems:"center",gap:10,padding:"11px 13px",background:s?"rgba(239,68,68,0.2)":c?"rgba(245,160,0,0.06)":"rgba(255,255,255,0.05)",borderRadius:12,border:`1px solid ${s?"rgba(239,68,68,0.6)":c?"rgba(245,160,0,0.25)":"rgba(255,255,255,0.1)"}`,cursor:c?"not-allowed":"pointer",transition:"all 0.2s",opacity:c?.75:1},onMouseEnter:u=>{!c&&!s&&(u.currentTarget.style.background="rgba(239,68,68,0.12)")},onMouseLeave:u=>{!c&&!s&&(u.currentTarget.style.background="rgba(255,255,255,0.05)")},children:[e.jsx("div",{style:{width:58,height:40,borderRadius:7,flexShrink:0,overflow:"hidden",background:c?"rgba(245,160,0,0.1)":"#111827",border:`1px solid ${c?"rgba(245,160,0,0.3)":"rgba(239,68,68,0.35)"}`,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},children:c?e.jsx("div",{style:{textAlign:"center"},children:e.jsx("div",{style:{fontSize:16},children:"🔒"})}):e.jsxs(e.Fragment,{children:[e.jsx("img",{src:`https://img.youtube.com/vi/${t.videoId}/mqdefault.jpg`,alt:t.title,style:{width:"100%",height:"100%",objectFit:"cover"},onError:u=>{u.target.style.display="none"}}),s&&e.jsx("div",{style:{position:"absolute",inset:0,background:"rgba(239,68,68,0.55)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("span",{style:{fontSize:15,color:"#fff"},children:"▶"})}),!s&&e.jsx("div",{style:{position:"absolute",inset:0,background:"rgba(0,0,0,0.25)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("span",{style:{fontSize:12,color:"rgba(255,255,255,0.9)"},children:"▶"})})]})}),e.jsxs("div",{style:{flex:1,minWidth:0},children:[e.jsx("div",{style:{color:c?"#f5a000":s?"#fca5a5":"#ffffff",fontSize:11,fontWeight:700,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",letterSpacing:.2},children:t.title}),e.jsx("div",{style:{fontSize:10,color:c?"rgba(245,160,0,0.65)":"rgba(201,223,247,0.7)",marginTop:3,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:t.desc}),e.jsxs("div",{style:{display:"flex",gap:6,marginTop:4,alignItems:"center"},children:[e.jsx("span",{style:{fontSize:9,color:"rgba(201,223,247,0.5)"},children:t.dur}),e.jsx("span",{style:{fontSize:9,padding:"2px 8px",borderRadius:6,fontWeight:700,background:r.bg,color:r.text},children:t.level})]})]}),e.jsx("div",{style:{flexShrink:0,width:26,height:26,borderRadius:"50%",background:c?"rgba(245,160,0,0.15)":s?"rgba(239,68,68,0.5)":"rgba(239,68,68,0.2)",display:"flex",alignItems:"center",justifyContent:"center",border:`1px solid ${c?"rgba(245,160,0,0.4)":s?"rgba(239,68,68,0.8)":"rgba(239,68,68,0.4)"}`},children:e.jsx("span",{style:{fontSize:c?11:9,color:c?"#f5a000":s?"#fff":"#fca5a5"},children:c?"🔒":s?"■":"▶"})})]},a)}),e.jsxs("a",{href:"https://youtube.com/@codingboss-s7l",target:"_blank",rel:"noopener noreferrer",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,padding:"8px 12px",borderRadius:10,marginTop:4,background:"rgba(239,68,68,0.1)",border:"1px solid rgba(239,68,68,0.25)",textDecoration:"none",color:"#fca5a5",fontSize:11,fontWeight:600,transition:"background 0.2s"},onMouseEnter:t=>t.currentTarget.style.background="rgba(239,68,68,0.2)",onMouseLeave:t=>t.currentTarget.style.background="rgba(239,68,68,0.1)",children:[e.jsx(L,{size:13,color:"#ef4444"}),"Visit CodingBoss Channel",e.jsx(Y,{size:11})]})]})]})}const ge=[{key:"voice",label:"Voice",icon:e.jsx(G,{size:20}),activeGrad:`linear-gradient(135deg,${j.accent1},${j.accent3})`,idleColor:j.accent2,border:`1px solid ${j.border}`,glow:"rgba(11,103,201,0.45)"},{key:"video",label:"Videos",icon:e.jsx(L,{size:20}),activeGrad:"linear-gradient(135deg,#ef4444,#b91c1c)",idleColor:"#fca5a5",border:"1px solid rgba(239,68,68,0.35)",glow:"rgba(239,68,68,0.45)"},{key:"chat",label:"AI Tutor",icon:e.jsx(X,{size:20}),activeGrad:`linear-gradient(135deg,${j.purple},#7c3aed)`,idleColor:"#a5b4fc",border:"1px solid rgba(99,102,241,0.35)",glow:"rgba(99,102,241,0.45)"}];function fe({currentSlide:o}){const[g,d]=i.useState(null),[p,t]=i.useState(!1),a=r=>d(s=>s===r?null:r);return A.useEffect(()=>{const r=()=>t(window.innerWidth<768);return r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),A.useEffect(()=>{const r=()=>d("video");return window.addEventListener("open-video-panel",r),()=>window.removeEventListener("open-video-panel",r)},[]),e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{position:"fixed",zIndex:300,display:"flex",gap:p?14:10,...p?{bottom:16,left:"50%",transform:"translateX(-50%)",flexDirection:"row",background:"rgba(10,15,40,0.7)",padding:"10px 20px",borderRadius:"24px",border:"1px solid rgba(255,255,255,0.1)",backdropFilter:"blur(16px)",boxShadow:"0 10px 40px rgba(0,0,0,0.5)"}:{right:18,top:"50%",transform:"translateY(-50%)",flexDirection:"column"}},children:ge.map(r=>{const s=g===r.key;return e.jsxs(k.button,{onClick:()=>a(r.key),whileHover:{scale:1.1,x:-4},whileTap:{scale:.93},title:r.label,style:{width:52,height:52,borderRadius:14,border:r.border,cursor:"pointer",background:s?r.activeGrad:"rgba(255,255,255,0.05)",color:s?"#fff":r.idleColor,boxShadow:s?`0 6px 22px ${r.glow}, 0 0 0 1.5px ${r.idleColor}44`:"0 4px 14px rgba(0,0,0,0.55)",backdropFilter:"blur(14px)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:2,transition:"background 0.2s, color 0.2s, box-shadow 0.2s",position:"relative"},children:[r.icon,e.jsx("span",{style:{fontSize:9,fontWeight:700,letterSpacing:"0.03em",opacity:.85},children:r.label}),s&&e.jsx(k.span,{layoutId:"rp-dot",style:{position:"absolute",top:5,right:5,width:7,height:7,borderRadius:"50%",background:"#fff"}})]},r.key)})}),e.jsx(I,{children:g==="voice"&&e.jsx(se,{currentSlide:o,isOpen:!0,onToggle:()=>d(null)},"vox")}),e.jsx(I,{children:g==="video"&&e.jsx(ue,{onClose:()=>d(null),isMobile:p},"vid")}),e.jsx(le,{isOpen:g==="chat",onToggle:()=>d(null)})]})}const me=i.lazy(()=>w(()=>import("./Basics-Bx6Oxb5R.js"),__vite__mapDeps([0,1,2,3,4]))),be=i.lazy(()=>w(()=>import("./DataAndOps-Bvqkfn0_.js"),__vite__mapDeps([5,1,2,4]))),he=i.lazy(()=>w(()=>import("./ControlFlow-DFUXx3lM.js"),__vite__mapDeps([6,1,2,4]))),ye=i.lazy(()=>w(()=>import("./StructuresAndArrays-CyKviXy0.js"),__vite__mapDeps([7,1,2,4]))),xe=i.lazy(()=>w(()=>import("./FunctionsAndPointers-Cxhy3BmH.js"),__vite__mapDeps([8,1,2,4]))),ke=i.lazy(()=>w(()=>import("./MemoryAndFiles-D5gECM9f.js"),__vite__mapDeps([9,1,2,4]))),we=i.lazy(()=>w(()=>import("./AdvancedTopics-ZiOVoR3J.js"),__vite__mapDeps([10,1,2,4,3]))),ve=i.lazy(()=>w(()=>import("./FinalCongrats-BoBWx--C.js"),__vite__mapDeps([11,1,2]))),Ce=()=>e.jsx("div",{className:"flex items-center justify-center min-h-screen",children:e.jsx("div",{className:"text-cyan-400 font-mono animate-pulse",children:"Loading Course..."})});function je(){const[o,g]=i.useState(0),d=i.useRef(null);i.useEffect(()=>{const t=d.current;if(!t)return;const a=t.querySelectorAll(".slide-section"),r=new IntersectionObserver(s=>{s.forEach(c=>{if(c.isIntersecting){const u=Array.from(a).indexOf(c.target);u!==-1&&g(u)}})},{root:null,rootMargin:"-40% 0px -40% 0px",threshold:0});return a.forEach(s=>r.observe(s)),()=>r.disconnect()},[]);const p=()=>{var t;(t=d.current)==null||t.scrollTo({top:0,behavior:"smooth"})};return e.jsxs("div",{ref:d,className:"course-container font-sans selection:bg-cyan-200 relative overflow-hidden",style:{background:"transparent"},children:[e.jsx(Z,{}),e.jsx(fe,{currentSlide:o}),e.jsx(ee,{}),e.jsx("div",{className:"relative z-10",style:{position:"relative"},children:e.jsxs(i.Suspense,{fallback:e.jsx(Ce,{}),children:[e.jsx(me,{}),e.jsx(be,{}),e.jsx(he,{}),e.jsx(ye,{}),e.jsx(xe,{}),e.jsx(ke,{}),e.jsx(we,{}),e.jsx(ve,{onRestart:p})]})})]})}function Se(){return e.jsx(je,{})}K.createRoot(document.getElementById("root")).render(e.jsx(i.StrictMode,{children:e.jsx(Se,{})}));
