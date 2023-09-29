# js-training

# Atomic Design

Atomic design is a process that consists of five separate steps that work together to build more coherent, hierarchical, and thoughtful interface design systems.

Stages of Atomic Design

(1) Atoms - In design, atoms are the most basic components. They are the building blocks of design such as buttons, lines, shapes, icons, text fields, text labels, etc.

(2) Molecules - In design, a molecule can be created by combining two or more atoms. For instance, an input field and a button can combine to become a search form, which can perform the search function on the interface.

(3) Organisms - An organism is a collection of molecules that have been bonded together to form complex individual portions of the design such as a login page, form, etc.

(4) Templates - Templates are the glues that combine the different organisms or individual sections to create a complete design. 

(5) Pages - Pages are specific instances of templates that show what a UI looks like with real representative content in place.

Advantages 

(1) Design once and reuse whenever you want - 
(2) Creating a style guide is easy
(3) Understanding the layout is easy
(4) Prototyping becomes easy
(5) Easy in updating and removal


# 12 factor app

The Twelve-factor app is a set of 12 principles or best practices for building web applications which now days are more commonly known as Software-As-A-Service (SAAS) applications. 

(1) Codebase - Single codebase per application tracked in version control with many deploys.

(2) Dependencies - Explicitly declare and isolate dependencies. 

(3) Config - Store config in the environment. 

(4) Backing Services - Treat backing services as attached resources.

(5) Build, Release and Run - Strictly separate built and run stages.

(6) Processes - Execute the application as one or more stateless processes. 

(7) Port Binding - Export services via port binding. 

(8) Concurrency - Scale out via the process model.

(9) Disposability - Maximize robustness with fast startup and graceful shutdown.

(10) Development/Production Parity - Keep development, staging, and production as similar as possible.

(11) Logs - Treat logs as event streams. 

(12) Admin Processes - Run admin/management tasks as one-off processes.

