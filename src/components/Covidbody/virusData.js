
export const virusData = {
  COVID: {
    content: "",
    
      variants:[
        {
          name:"Alpha",
          description: "To be clear, there is only one strain of SARS-CoV-2 but multiple variants. The first discovered was Alpha, which was the variant discovered in the UK in September 2020 but was not named a Variant of Concern (VOC) by the WHO until December 18th, 2020 and was labeled Alpha on May 31st, 2021 when the new naming convention took over.",
          mutations:"B.1.1.7 variant, N501Y mutation, deletion on Spike at 69 & 70 position.",
        },
        {
          name:"Beta",
          description:"Originally discovered in South Africa with the earliest known sample dated May 2020 and labeled a VOC on Decenber 18th, 2020 by the WHO. ",
          mutations:"9 spike mutations along with D614G, 242-244 deletions & R246I mutation in NTD (N-terminal domain), K417N, E484K, & N501Y in RBD (Receptor-Binding Domain), A701V near furin cleavage site.",
        },
        {
          name: "Gamma",
          description:"This variant originated in Brazil with samples dating back to Nov 2020 and designation of a VOC coming January 11th, 2021 from the WHO and later designated Gamma.",
          mutations:"P.1 variant with notable mutations E484K, K417, and N501Y mutations in RBD, S1188L, K1795Q, and E5665D in ORF1ab (open reading frame), E92 in ORF8, P80K in N protein.",
        },
        {
          name: "Delta",
          description: "The Delta variant was discovered in India in Oct 2020 and designated a VOC on May 11th, 2021 and the Delta designation May 31st, 2021. Many studies regarded this variant as more virulent, or its ability to cause damage to the host, such as a retrospective cohort study in Canada that suggested an elevated risk to hospitalization (52%), ICU admission (89%), and death (51%) for Alpha-Gamma and an elevated risk to hospitalization (108%), ICU admission (235%), and death (133%).",
          mutations:"B.1.617.2 with E484Q, T478K, & L425R mutations in the RBD. L452R stronger affinity of S protein to ACE2 receptor & P681R mutation at furin cleavage site may boost replication.",
        },
        {
          name: "Omicron BA.1",
          description: "This variant was discovered in multiple countries but South Africa had reported it first on November 24th, according to Reuters. On the 26th, it was declared a VOC by the WHO. As previously stated, BA.1 contained substantial changes to previous variants, from NTD to RBD domains. Mutations in the RBD such as G339D, N501Y, & N440K result in an increase in binding affinity to ACE2 receptors. Other changes like G446S, G496S, and S371L may result in changes on how antibodies bind to the RBD of SARS-CoV-2.",
         mutations:"B.1.1.529 with numerous RBD, NTD, subdomain, AND heptad-repeat domain changes.",
        
        },
        {
          name: "Omicron BA.1.1",
          description: "BA.1.1 is a sub-variant of BA.1, the original Omicron variant. More to come.",
          mutations:"RBD R346K mutation but otherwise similar to BA.1",
        },
        {
          name: "Omicron BA.2",
          description: "Many mutations shared with other Omicron variants but specific ones include T19I, S371F and D405N, mainly in NTD and RBD.",
        },
        {
          name:"Omicron BA.3",
          description: "A unique mutation with R214del (deletion) as compared to BA.1 and BA.2.",
        },
        {
          name:"Omicron BA.4/5",
          description: "Unique mutations in L452R and F486V and reversion mutation at Q493.",
        },
        {
          who:"Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus. Most people infected with the virus will experience mild to moderate respiratory illness and recover without requiring special treatment. However, some will become seriously ill and require medical attention. Older people and those with underlying medical conditions like cardiovascular disease, diabetes, chronic respiratory disease, or cancer are more likely to develop serious illness. Anyone can get sick with COVID-19 and become seriously ill or die at any age. The best way to prevent and slow down transmission is to be well informed about the disease and how the virus spreads. Protect yourself and others from infection by staying at least 1 metre apart from others, wearing a properly fitted mask, and washing your hands or using an alcohol-based rub frequently. Get vaccinated when it’s your turn and follow local guidance.The virus can spread from an infected person’s mouth or nose in small liquid particles when they cough, sneeze, speak, sing or breathe. These particles range from larger respiratory droplets to smaller aerosols. It is important to practice respiratory etiquette, for example by coughing into a flexed elbow, and to stay home and self-isolate until you recover if you feel unwell.",
        }
      ]
    }
}