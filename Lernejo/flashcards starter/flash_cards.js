var kartoj = [{demando: "Input Device", respondo: "In computing, an input device is a piece of computer hardware equipment used to provide data and control signals to an information processing system such as a computer or information appliance. Examples of input devices include keyboards, mouse, scanners, digital cameras and joysticks."},
	      {demando: "Output Device", respondo: "In computing, an output device is a piece of computer hardware equipment that uses recieved data and commands from an information processing system (such as a computer or information appliance) in order to perform a task."},
	      {demando: "Storage Device", respondo: "In computing, a storage device is a piece of computer hardware equipment which is able to store or retrieve digital information in a storage medium"},
	      {demando: "Primary Storage", respondo: "<i>Primary storage</i> (also known as <i>main memory</i> or <i>internal memory</i>), often referred to simply as <i>memory</i>, is a type of computer data storage which is directly accessible to the cpu."},
	      {demando: "Secondary Storage", respondo: "<i>Secondary storage</i> (also known as <i>external memory</i> or <i>auxiliary storage</i>) is a type of computer data storage which is not directly accessible to the cpu."},
	      {demando: "URL", respondo: "A Uniform Resource Locator (URL), colloquially termed a web address, is a reference to a web resource that specifies its location on a computer network and a mechanism for retrieving it."},
	      {demando: "Router", respondo: "A router is a networking device that forwards data packets between computer networks."},
	      {demando: "Browser", respondo: "A <b>web browser</b> (commonly referred to as a <b>browser</b>) is a software application for retrieving, presenting and traversing information resources on the World Wide Web."},
	      {demando: "Client Application", respondo: "A client is a piece of computer hardware or software that accesses a service made available by a server."},
	      {demando: "Cookie", respondo: "An <b>HTTP cookie</b> (also called <b>web cookie</b>, <b>Internet cookie</b>, <b>browser cookie</b>, or simply <b>cookie</b>) is a small piece of data sent from a website and stored on the user's computer by the user's web browser while the user is browsing."},
	      {demando: "DNS", respondo: "The <b>Domain Name System</b> (<b>DNS</b>) is a hierarchical decentralized naming system for computers, services, or other resources connected to the Internet or a private network. It associates various information with domain names assigned to each of the participating entities. Most prominently, it translates more readily memorized domain names to the numerical IP addresses needed for locating and identifying computer services and devices with the underlying network protocols."},
	      {demando: "HTTP", respondo: "The <b>Hypertext Transfer Protocol</b> (<b>HTTP</b>) is an application protocol for distributed, collaborative, and hypermedia information systems."},
	      {demando: "Internet", respondo: "The <b>Internet</b> is the global system of interconnected computer networks that use the Internet protocol suite (TCP/IP) to link devices worldwide."},
	      {demando: "IPv4", respondo: "The <b>Internet Protocol</b> (<b>IP</b>) is the principal communications protocol in the Internet protocol suite for relaying datagrams across network boundaries. Its routing function enables internetworking, and essentially establishes the Internet. <b>Internet Protocol version 4</b> (<b>IPv4</b>) is the fourth version of the Internet Protocol. It still routes most Internet traffic today, despite the ongoing deployment of a successor protocol, IPv6."},
	      {demando: "Bootstrap", respondo: "<b>Bootstrap</b> is a free and open-source front-end web framework for designing websites and web applications."},
	      {demando: "HTML", respondo: "<b>Hypertext Markup Language</b> (<b>HTML</b>) is the standard markup language for creating web pages and web applications."},
	      {demando: "CSS", respondo: "<b>Cascading Style Sheets</b> (<b>CSS</b>) is a style sheet language used for describing the presentation of a document written in a markup language. Although most often used to set the visual style of web pages and user interfaces written in HTML and XHTML, the language can be applied to any XML document, including plain XML, SVG and XUL, and is applicable to rendering in speech, or on other media."},
	      {demando: "JavaScript", respondo: "<b>JavaScript</b> (/ˈdʒɑːvəˌskrɪpt/), often abbreviated as <b>JS</b>, is a high-level, dynamic, weakly typed, prototype-based, multi-paradigm, and interpreted programming language.  It is used to make webpages interactive and provide online programs, including video games."},
	      {demando: "Jumbotron", respondo: "A lightweight, flexible Bootstrap component that can optionally extend the entire viewport to showcase key content on your site."},
	      {demando: "Boolean Expression", respondo: "In computer science, a <b>Boolean expression</b> is an expression in a programming language that produces a Boolean value when evaluated, i.e. one of <b>true</b> or <b>false</b>. A Boolean expression may be composed of a combination of the Boolean constants <b>true</b> or <b>false</b>, Boolean-typed variables, Boolean-valued operators, and Boolean-valued functions."},
	      {demando: "Function", respondo: "In computer programming, a subroutine is a sequence of program instructions that perform a specific task, packaged as a unit. This unit can then be used in programs wherever that particular task should be performed.<br/>
<br/>
Subprograms may be defined within programs, or separately in libraries that can be used by multiple programs. In different programming languages, a subroutine may be called a <b>procedure</b>, a <b>function</b>, a <b>routine</b>, a <b>method</b>, or a <b>subprogram</b>. The generic term <b>callable unit</b> is sometimes used."},
	      {demando: "Statement", respondo: "In computer programming, a <b>statement</b> is the smallest standalone element of an imperative programming language that expresses some action to be carried out."},
	      {demando: "Conditional Statement", respondo: "In computer science, <b>conditional statements</b>, <b>conditional expressions</b> and <b>conditional constructs</b> are features of a programming language, which perform different computations or actions depending on whether a programmer-specified boolean condition evaluates to true or false."},
	      {demando: "Parameters", respondo: "In computer programming, a <b>parameter</b> is a special kind of variable, used in a subroutine to refer to one of the pieces of data provided as input to the subroutine. These pieces of data are called <b>arguments</b>. An ordered list of parameters is usually included in the definition of a subroutine, so that, each time the subroutine is called, its arguments for that call can be assigned to the corresponding parameters."},
	      {demando: "Return Value", respondo: "A <b>return value</b> is a variable passed back to the code after a function ends. In JavaScript, one can get this by assigning the function run code to a variable."},
	      {demando: "Variable", respondo: "In computer programming, a <b>variable</b> or <b>scalar</b> is a storage location paired with an associated symbolic name (an identifier), which contains some known or unknown quantity of information referred to as a value."},
	      {demando: "Assignment Operator", respondo: "In computer programming, an <b>assignment statement</b> sets and/or re-sets the value stored in the storage location(s) denoted by a variable name; in other words, it copies a value into the variable. In most imperative programming languages, the assignment statement (or expression) is a fundamental construct.<br/>
<br/>
Today, the most commonly used notation for this basic operation has come to be <code><i>x</i> = <i>expr</i></code> (originally Superplan 1949–51, popularized by Fortran 1957 and C) followed by <code><i>x</i> := <i>expr</i></code> (originally ALGOL 1958, popularised by Pascal), although there are many other notations in use. In some languages the symbol used is regarded as an <b>operator</b> (meaning that the assignment has a value) while others define the assignment as a <b>statement</b> (meaning that it cannot be used in an expression)."},
	      {demando: "Array", respondo: "A client is a piece of computer hardware or software that accesses a service made available by a server."},
	      {demando: "Syntax", respondo: "A client is a piece of computer hardware or software that accesses a service made available by a server."},
	      {demando: "Concatenation", respondo: "A client is a piece of computer hardware or software that accesses a service made available by a server."},
	      {demando: "String", respondo: "A client is a piece of computer hardware or software that accesses a service made available by a server."},
	      {demando: "Object", respondo: "A client is a piece of computer hardware or software that accesses a service made available by a server."},
	      {demando: "Property", respondo: "A client is a piece of computer hardware or software that accesses a service made available by a server."}, 
	      {demando: "Method", respondo: "A client is a piece of computer hardware or software that accesses a service made available by a server."];

var demandmontrilo = kartoj.length-1;

var montrasKarton = false;

var kartaTipo = null;

function newCard(){
    montrasKarton = true;
    kartaTipo = "demando";
    document.getElementById("ŝanĝadaButono").innerHTML="Show Answer"
    document.getElementById("ŝanĝadaButono").style.display = "inline";
    document.getElementById("ŝanĝadaButono").style.visibility = "visible";
    if (demandmontrilo<kartoj.length-1){
	demandmontrilo++;
    } else {
	demandmontrilo=0;
    }
    document.getElementById("flash-card").innerHTML=kartoj[demandmontrilo].demando;
}

function showAnswer(){
    if (montrasKarton == true){
	console.log((typeof kartaTipo != "string") || (kartaTipo=="respondo"));
	if ((typeof kartaTipo != "string") || (kartaTipo=="respondo")){
	    document.getElementById("flash-card").innerHTML=kartoj[demandmontrilo].demando;
	    kartaTipo = "demando";
	    document.getElementById("ŝanĝadaButono").innerHTML="Show Answer"
	} else if (kartaTipo == "demando"){
	    document.getElementById("flash-card").innerHTML=kartoj[demandmontrilo].respondo;
	    kartaTipo = "respondo";
	    document.getElementById("ŝanĝadaButono").innerHTML="Show Question"
	} else {
	    document.getElementById("flash-card").innerHTML=kartoj[demandmontrilo].demando;
	    kartaTipo = "demando";
	    document.getElementById("ŝanĝadaButono").innerHTML="Show Answer"
	}
    } else {
	document.getElementById("ŝanĝadaButono").style.display = "none";
	document.getElementById("ŝanĝadaButono").style.visibility = "hidden";
    }
}
