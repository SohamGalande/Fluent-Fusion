import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';

function CardLanguages() {
  return (
    <MDBRow>

      <MDBCol sm='4'>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle><strong>Japanese</strong></MDBCardTitle>
            <MDBCardText>
            <p>Japanese (日本語, Nihongo) is the principal language of the Japonic language family spoken by the Japanese people. It has around 128 million speakers, primarily in Japan, the only country where it is the national language, and within the Japanese diaspora worldwide.</p>
            </MDBCardText>
            <MDBBtn href='/login'>Learn</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol sm='4'>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle><strong>German</strong></MDBCardTitle>
            <MDBCardText>
              <p>German (Standard High German: Deutsch) is a West Germanic language mainly spoken in Western and Central Europe. It is the most widely spoken and official or co-official language in Germany, Austria, Switzerland, Liechtenstein, and the Italian province of South Tyrol.</p>
            </MDBCardText>
            <MDBBtn href='/login'>Learn</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol sm='4'>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle><strong>Italian</strong></MDBCardTitle>
            <MDBCardText>
              <p>Italian (italiano, Italian: lingua italiana) is a Romance language of the Indo-European language family that evolved from the Vulgar Latin of the Roman Empire. Italian is the least divergent Romance language from Latin, together with Sardinian.Spoken by about 85 million people including 67 million native speakers (2024).</p>
            </MDBCardText>
            <MDBBtn href='/login'>Learn</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol sm='4'>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle><strong>Chinese</strong></MDBCardTitle>
            <MDBCardText>
              <p>Chinese (simplified Chinese: 汉语; traditional Chinese: 漢語) is a group of languages spoken natively by the ethnic Han Chinese majority and many minority ethnic groups in China. Approximately 1.3 billion people, or around 16% of the global population, speak a variety of Chinese as their first language.</p>
            </MDBCardText>
            <MDBBtn href='/login'>Learn</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol sm='4'>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle><strong>Spanish</strong></MDBCardTitle>
            <MDBCardText>
              <p>Spanish (español) or Castilian (castellano) is a Romance language of the Indo-European language family that evolved from the Vulgar Latin spoken on the Iberian Peninsula of Europe. Today, it is a global language with about 500 million native speakers, mainly in the Americas and Spain, and about 600 million when including speakers as a second language.</p>
            </MDBCardText>
            <MDBBtn href='/login'>Learn</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol sm='4'>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle><strong>French</strong></MDBCardTitle>
            <MDBCardText>
              <p>French (French: français [fʁɑ̃sɛ] or langue française [lɑ̃ɡ fʁɑ̃sɛːz]) is a Romance language of the Indo-European family. It descended from the Vulgar Latin of the Roman Empire, as did all Romance languages. French evolved from Gallo-Romance, the Latin spoken in Gaul, and more specifically in Northern Gaul.</p>
            </MDBCardText>
            <MDBBtn href='/login'>Learn</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol sm='4'>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle><strong>English</strong></MDBCardTitle>
            <MDBCardText>
              <p>English is a West Germanic language in the Indo-European language family, whose speakers, called Anglophones, originated in early medieval England. The namesake of the language is the Angles, one of the ancient Germanic peoples that migrated to the island of Great Britain.English is the most spoken language in the world and the third-most spoken native language, after Mandarin Chinese and Spanish.</p>
            </MDBCardText>
            <MDBBtn href='/login'>Learn</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol sm='4'>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle><strong>Hindi</strong></MDBCardTitle>
            <MDBCardText>
              <p>Hindi (Hindi:हिन्दी,Hindī) is an Indo-Aryan language spoken chiefly in North India, and serves as the lingua franca of the Hindi Belt region encompassing parts of northern, central, eastern, and western India. Hindi has been described as a standardised and Sanskritised register[19] of the Hindustani language, which itself is based primarily on the Khariboli dialect of Delhi and neighbouring areas of North India</p>
            </MDBCardText>
            <MDBBtn href='/login'>Learn</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol sm='4'>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle><strong>Korean</strong></MDBCardTitle>
            <MDBCardText>
              <p>Korean (South Korean: 한국어, hangugeo; North Korean: 조선말, chosŏnmal) is the native language for about 81.7 million people, mostly of Korean descent.[a][2] It is the official and national language of both South Korea and North Korea.</p>
            </MDBCardText>
            <MDBBtn href='/login'>Learn</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

    </MDBRow>
  );
}

export default CardLanguages;