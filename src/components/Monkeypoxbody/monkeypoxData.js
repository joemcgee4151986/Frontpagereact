import React from 'react';
export const monkeypoxData = {
 monkeypox:{ 
  summary: [
  {
     who:" A group of global experts convened by WHO has agreed on new names for monkeypox virus variants, as part of ongoing efforts to align the names of the monkeypox disease, virus and variants – or clades – with current best practices. The experts agreed to name the clades using Roman numerals.The monkeypox virus was named upon first discovery in 1958, before current best practices in naming diseases and viruses were adopted. Similarly for the name of the disease it causes. Major variants were identified by the geographic regions where they were known to circulate.Current best practice is that newly-identified viruses, related disease, and virus variants should be given names with the aim to avoid causing offense to any cultural, social, national, regional, professional, or ethnic groups, and minimize any negative impact on trade, travel, tourism or animal welfare."
  }
  ],
      
      variants:[
        
  
    {
          
          variant:  <><variant id = "Alpha"/>Alpha</>,
          description: "To be clear, there is only one strain of SARS-CoV-2 but multiple variants. The first discovered was Alpha, which was the variant discovered in the UK in September 2020 but was not variantd a Variant of Concern (VOC) by the WHO until December 18th, 2020 and was labeled Alpha on May 31st, 2021 when the new naming convention took over.",
          mutations:"B.1.1.7 variant, N501Y mutation, deletion on Spike at 69 & 70 position.",
        },
        {
          variant:<><variant id = "Beta"/>Beta</>,
          description:"Originally discovered in South Africa with the earliest known sample dated May 2020 and labeled a VOC on Decenber 18th, 2020 by the WHO. ",
          mutations:"9 spike mutations along with D614G, 242-244 deletions & R246I mutation in NTD (N-terminal domain), K417N, E484K, & N501Y in RBD (Receptor-Binding Domain), A701V near furin cleavage site.",
        },
        {
          variant: <><variant id = "Gamma"/>Gamma</>,
          description:"This variant originated in Brazil with samples dating back to Nov 2020 and designation of a VOC coming January 11th, 2021 from the WHO and later designated Gamma.",
          mutations:"P.1 variant with notable mutations E484K, K417, and N501Y mutations in RBD, S1188L, K1795Q, and E5665D in ORF1ab (open reading frame), E92 in ORF8, P80K in N protein.",
      },
        {
          variant: <><variant id ="Delta"/>Delta</>,
          description: "The Delta variant was discovered in India in Oct 2020 and designated a VOC on May 11th, 2021 and the Delta designation May 31st, 2021. Many studies regarded this variant as more virulent, or its ability to cause damage to the host, such as a retrospective cohort study in Canada that suggested an elevated risk to hospitalization (52%), ICU admission (89%), and death (51%) for Alpha-Gamma and an elevated risk to hospitalization (108%), ICU admission (235%), and death (133%).",
          mutations:"B.1.617.2 with E484Q, T478K, & L425R mutations in the RBD. L452R stronger affinity of S protein to ACE2 receptor & P681R mutation at furin cleavage site may boost replication.",
        },
        {
          variant: <><variant id ="Omicron BA.1"/>Omicron BA.1</>,
          description: "This variant was discovered in multiple countries but South Africa had reported it first on November 24th, according to Reuters. On the 26th, it was declared a VOC by the WHO. As previously stated, BA.1 contained substantial changes to previous variants, from NTD to RBD domains. Mutations in the RBD such as G339D, N501Y, & N440K result in an increase in binding affinity to ACE2 receptors. Other changes like G446S, G496S, and S371L may result in changes on how antibodies bind to the RBD of SARS-CoV-2.",
         mutations:"B.1.1.529 with numerous RBD, NTD, subdomain, AND heptad-repeat domain changes.",
        
        },
        {
          variant: <><variant id ="Omicron BA.1.1"/>Omicron BA.1.1</>,
          description: "BA.1.1 is a sub-variant of BA.1, the original Omicron variant. More to come.",
          mutations:"RBD R346K mutation but otherwise similar to BA.1",
        },
        {
          variant: <><variant id ="Omicron BA.2"/>Omicron BA.2</>,
          description: "Like most variants, origins are unknown but as reported by the BBC, BA.2 was first detected in the Philippines in November, 2021. Results from a phylodynamic analysis of the sub-variants suggest. however, diversification of Omicron occurred around Gauteng Province of South Africa, meaning the sub-variants of BA.1, BA.1.1, BA.2, and BA.3 (the latest variant available to study by the authors)[1]",
   
          mutations:"Many mutations shared with other Omicron variants but specific ones include T19I, S371F and D405N, mainly in NTD and RBD.",
        },
        {
          variant: <><variant id ="Omicron BA.3"/>Omicron BA.3</>,
          description: "This variant was originally detected in the northwest portion of South Africa. BA.1, BA.2, and BA.3 have been detected at around the same time but did not take off as effectively as the other variants [3]",
          mutations:"A unique mutation with R214del (deletion) as compared to BA.1 and BA.2. [2]",
        },
        {
          variant:<><variant id ="Omicron BA.4/5"/>Omicron BA.4/5</>,
          description:"Currently becoming the dominant global sub-variant as of July, 2022. It is suggested that the reversion mutation R493Q lead to improved ACE2 binding affinity based on in vitro testing with pseudoviruses.[4] With immunization and infection profiles being different in every country, the effects of this variant will differ. In South Africa, hospitalization and death rates only had slight increases while Portugal experienced a larger increase in both rates. [5]",
          mutations:"Unique mutations in L452R and F486V and reversion mutation at Q493.",
        },
        {
          title: <><variant id ="References"/>References</>,
          description: <><ul><li>1.Volz EM, Koelle K, Bedford T (2013) Viral Phylodynamics. <a href ="https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1002947"  rel="noopener">PLOS Computational Biology 9(3): e1002947.</a></li>
             <li>2.Mallapaty, S., 2022. Where did Omicron come from? Three key theories.  <a href="https://doi.org/10.1038/d41586-022-00215-2\r\n3.Desingu" rel="noopener">[online] Nature.com.,</a> </li>
           <li>3.Desingu, Perumal A et al. “Emergence of Omicron third lineage BA.3 and its importance.” <i>Journal of medical virology vol. 94,5 (2022): 1808-1810. doi:10.1002/jmv.27601 </i></li>
           <li>4.Wang, Qian et al. “Antibody evasion by SARS-CoV-2 Omicron subvariants BA.2.12.1, BA.4, & BA.5.” Nature, 10.1038/s41586-022-05053-w.</li> 
           <li>5.<i>5 Jul. 2022, doi:10.1038/s41586-022-05053-w</i> Callaway, E., 2022. What Omicron’s BA.4 and BA.5 variants mean for the pandemic. <a href ="https://www.nature.com/articles/d41586-022-01730-y/" rel="noopener">[online] Nature.com.</a></li></ul></>, 
        
        },
     
      ]
      }
  }

    
  

