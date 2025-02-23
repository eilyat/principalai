---
title: Synthetic Unit Record Files
type: Article
description: test
authors:
  - Eugene Isack
cardImage: ../../images/img1_synthetic_data.webp
downloadPdf: https://principaleconomics.com/wp-content/uploads/2024/07/012-regional-land-transport-demand-model-technical-notes-for-practitioners.pdf
tagline: Synthetic data generation using Statistics New Zealand IDI microdata
pubDate: 2023-09-01
---
Synthetic data generation using Statistics NZ IDI microdata

Policy decisions increasingly require technical modelling approaches informed by granular data on business demographics, household, and urban environment features. Over the past decade, our team has conducted various data analyses using microdata projects. However, due to confidentiality protocols, this granular data is often unavailable outside Statistics NZ’s Datalab, limiting its use for monitoring and research.

Effective analysis aims to generate actionable insights and guide informed decision-making. Microdata analysis reveals the intricate relationships between variables and establishes the foundation for sophisticated decision-making. However, lacking access to microdata outside secure environments for scenario testing, monitoring outcomes, and evaluating effectiveness can still restrict policymakers from achieving meaningful change.

This article discusses the creation of a Synthetic Unit Record File (SURF) for disseminating publicly assessable microdata that emulates the real world while maintaining confidentiality. Our team recently applied this methodology to a large dataset of Motor Vehicle Registration, with a sample population of over 10 million, to extract anonymised data for broader organisational and research use. This article describes the purpose of adopting this approach and the methodology involved.

![](//img1_synthetic_data.webp)

At Principal Economics, we rely heavily on data to conduct our analysis, drawing together data from disparate sources across government departments, open data providers, spatial data, generated data, simulated data, and we’ve used it. In our field, there’s always a balance to maintain. We’re tasked with addressing broad questions, yet answers are always layered with nuance. This is not too dissimilar to the type of data we work with. A relatively simple question posed to us may entail;

What was the average travel distance by light vehicles in New Zealand in 2021? Easy enough, 19,730. This can be found as publicly available data. How many people were unemployed in 2021? Again, easy to answer, by the end of the December quarter it was 3.2%. What is the difference between the travel patterns of employed and unemployed people? Suddenly, providing an appropriate answer becomes far more complex. While aggregate statistics are readily available to the public, the challenge escalates when more detailed disaggregation is needed, especially when pulling from disparate data sources. We may consider using microdata de-identified individual unit record data. As trusted researchers, we are approved to access and conduct research using Statistics New Zealand’s Integrated Data Infrastructure, providing that the research meets access criteria and the outputs adhere to confidentiality requirements.

Often aggregated data isn't enough for government departments striving to assess the nuanced effects of policies—such as how a policy might affect a rural community versus an urban one or how income groups experience public services differently. Using microdata, with its individual-level detail, we can offer these insights, and our team is experienced in and has undertaken this practice many times before. Just as policymakers want to make the right decision for their constituents, we want to provide the right information that captures the full spectrum of how individuals make decisions and all the factors that influence their choices.

Access to microdata enables researchers to derive invaluable multidimensional insights. Even still, there is tension between data accessibility and privacy protection amplified by an ever-increasing demand for detailed information. From simple queries to complex insights

Using administrative microdata for enhanced insights

Thinking back to our original question: What is the average travel distance by light vehicles in New Zealand in 2021? Is this different by age group? What about by region? Does income level change how much we travel? How about households with children? Indeed, our travel decisions vary based on the suburbs we live in, reflecting differences in accessibility, local services, and lifestyle. And while we’re at it, what type of vehicles are being driven? And how does this change over time? On that note, what is going on with electric cars?

All these factors are critical to understanding travel behaviours and, in turn, how we plan our cities, address infrastructure needs, and shape our policies. The more we delve into a seemingly simple question, disaggregating the nuances as we finally begin to grasp the data before us, new lines of inquiry inevitably arise. Yet, each additional breakdown of tabulated data heightens the risk of disclosure. And so, the value of highly granular, cross-tabulated data becomes apparent, while the limitations of aggregated data become increasingly clear.

A case study in the use of microdata

In our recent research report, The Geodemographics of VKT, we explored the application of synthetic data methodology to a range of datasets. Given the wide range of factors of VKT, it is crucial to explore granular data. For example, Age, income, geographic location, vehicle attributes, urban form, and public transport coverage all affect travel behaviour. Furthermore, how these factors interact with one another is only sometimes consistent. For example, someone who lives in a suburban neighbourhood with limited public transport options may drive significantly more than someone in a central urban location with easy access to multiple transport modes, even if their income or household structure is similar. Someone with a larger, less fuel-efficient vehicle may take shorter trips due to higher running costs; if you had an electric car, you might have completely different travel patterns.

In the IDI we keep the dataset disaggregated , we disaggregate the dataset to allow flexible analysis and linkages. This approach supports aggregating data for individual and household correlations, analysing specific vehicle attributes, and future potential for connecting with other datasets like health and employment records. It also enables longitudinal studies to track changes over time. This flexibility helps us address evolving research questions, uncover complex relationships, and model diverse factors affecting vehicle usage.

While we can identify these correlations, and all the complex questions posed to us, the real challenge lies in determining how to effectively use this information. How do we translate these insights into actionable strategies, policies, or interventions that address the underlying issues? Understanding the data is only the first step—applying it to create tangible, positive outcomes is where the real impact lies.

To adequately evaluate how various factors and their interactions influence VKT, we use the Statistics NZ Integrated Data (IDI). This extensive database provides de-identified microdata on individuals and households from administrative sources. We assemble the dataset by analysing over 10 million odometer readings from multiple snapshots of the MVR to determine VKT for each vehicle and its owner. As odometer readings are not continuous, we calculate VKT by measuring the difference between readings to construct an annual vehicle usage profile. These profiles were then linked with the IDI Core and Experimental Administrative Population Census (APC) data to establish links between individual VKT and demographic variables.

Our analytical dataset includes various vehicle attributes, such as age, engine size, fuel type, and body type.

Assessment of the impact of policy packages and their sequencing

Following the trend of increasing granularity in analysis, digital twins (virtual replicas of In the IDI, we disaggregate the dataset to allow flexible analysis and linkages. This approach supports aggregating data for individual and household correlations, analysing specific vehicle attributes, and future potential for connecting with other datasets like health and employment records. It also enables longitudinal studies to track changes over time. This flexibility helps us address evolving research questions, uncover complex relationships, and model diverse factors affecting vehicle usage. While we can identify these correlations and all the complex questions posed to us, the real challenge lies in determining how to effectively use this information. How do we translate these insights into actionable strategies, policies, or interventions that address the underlying issues? Understanding the data is only the first step—applying it to create tangible, positive outcomes is where the real impact lies. The process behind synthetic data generation

To assist with checking and validating the Ministry of Transport’s Monty agent-based modelling outputs, we generated a SURF (Synthetic Unit Record File) of annual VKT for individuals. Synthetic datasets closely mimic the relationships and distributions found in the original dataset, preserving its statistical properties. To simplify the outputs, we aggregate and annualise the data by summing the VKT for all vehicles registered to an individual over a year. Household and individual attributes are aligned to a single point, ensuring consistency when linking demographic and vehicle data to travel behaviour.

Creating a synthetic dataset involves balancing accuracy with privacy. The aim is to closely replicate the original data's characteristics while protecting sensitive information. Synthetic data are semi-realistic representations of the population, designed to respect only the maintained distributions, variables, and relationships. The process involves replicating the statistical relationships between variables without revealing any sensitive or identifiable information.

After generating the synthetic dataset, we validate it to ensure it mirrors the original data’s statistical properties and analytical outcomes. This involves testing both univariate distributions and pairwise correlations to confirm that the synthetic data accurately reflects the original structure and relationships.

While we primarily rely on Classification and Regression Trees (CART) models (often the default choice in synthetic data generation), we found that, at times, they would produce outcomes that diverged significantly from the actual data. Effective fine-tuning of the data synthesis process requires not only technical expertise in modelling methods but also domain expertise in understanding the relationships between variables.

To address these issues we selected methods on a per-variable basis to best preserve statistical relationships. In addition, we apply stratification techniques to ensure subgroups, such as geographic regions are appropriately synthesised. These adjustments we necessary to ensure that the synthetic dataset remained both accurate and reliable for analysis both between variables and by geographic areas.

The synthesised dataset we created encompasses all MVR observations, allowing us to calculate VKT and establish linkages to demographic attributes. Comparing between the synthesised and actual data showed strong pair-wise utility scores well within recommended margins across all variables confirming its reliability for analysis. The extensive data synthesis and high utility scores suggest promising applications of synthetic data generation in other domains requiring detailed demographic and geographic analysis.

Concluding remarks

The purpose of any analytical process is to drive meaningful insights and informed decisions. Microdata analysis determines the relationships between variables, deriving the parameters needed for complex simulation modelling. Once we've understood the interconnected relationships, synthetic data enables us to simulate scenarios and assess potential impacts without direct access to the sensitive, often restricted, microdata. This is invaluable for monitoring and testing policy impacts.