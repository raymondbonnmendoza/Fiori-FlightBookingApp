5 Fiori Design Principles (to follow for an SAP UI5 app to be considered as a Fiori App)
1. Role-based
SAP UI5 applications become role-based by:
- Deploying them to the Fiori Launchpad
- Leveraging its catalog groups
- Roles concept
- Read more here
2. Delightful
- Must make an emotional connection - Enriches your work experience by allowing you to simply do your job.
3. Coherent
- By definitiion: logical & consistent, all parts go well with each other - Whether you fulfill a sales order, review your latest KPIs, or manage leave requests – SAP Fiori adheres to a consistent interaction and visual design language. Across the enterprise, you enjoy the same intuitive and consistent experience.
4. Simple
- Easy to use
- Personalized experience
- Helps you complete your job intuitively and quickly
5. Adaptive
- Enables you to work where you want and how you want, regardless of the device you’re using

*********************************************************************************************

Fiori Application Types:
Transactional - Common apps
Analytical - Run in hana or 2 tier architecture. Graphical KPI
Factsheets - Hana only

*********************************************************************************************

Lifecycle Concepts:
onInit()
This method is called upon initialization of the View
It is only called once per View instance
 
onBeforeRendering()
This method is called every time the View is rendered
Before HTML is placed in the DOM-Tree
 
onAfterRendering()
This method is called every time the View is rendered
after the HTML is placed in the DOM-Tree
 
onExit()
This method is called upon destruction of the View.
The controller should perform its internal destruction in this hook

*********************************************************************************************

Types of Data Binding:
Property binding
Properties of the control to get automatically initialized and updated from model data
 
Element binding
Allows to bind elements to a specific object in the model data
This is helpful in binding model data in master detail page.
 
Aggregation binding
Used to automatically create child controls according to model data.

*********************************************************************************************