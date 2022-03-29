import React from "react";
import {Row} from 'react-bootstrap';
import "./styles.css";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { PrimaryButton as PrimaryButtonBase } from "../../components/misc/Buttons.js";
import { ReactComponent as SvgDecoratorBlob } from "../../Assets/Images/svg-decorator-blob-6.svg";

const PlansContainer = tw.div`flex justify-between flex-col lg:flex-row items-center lg:items-stretch relative`;

const PlanHeader = styled.div`
  ${tw`flex flex-col uppercase leading-relaxed py-8`}
  .name {
    ${tw`font-bold text-xl`}
  }
  .price {
    ${tw`font-bold text-4xl sm:text-5xl my-1`}
  }
  .duration {
    ${tw`text-gray-500 font-bold tracking-widest`}
  }
`;

const Plan = styled.div`
${tw`w-full max-w-sm mt-16 lg:mr-8 lg:last:mr-0 text-center px-8 rounded-lg shadow relative pt-2 text-gray-900 bg-white flex flex-col`}
.planHighlight {
  ${tw`rounded-t-lg absolute top-0 inset-x-0 h-2`}
}

${props =>
  props.featured &&
  css`
    background: rgb(100,21,255);
    background: linear-gradient(135deg, rgba(100,21,255,1) 0%, rgba(128,64,252,1) 100%);
background: rgb(85,60,154);
background: linear-gradient(135deg, rgba(85,60,154,1) 0%, rgba(128,90,213,1) 100%);
background: rgb(76,81,191);
background: linear-gradient(135deg, rgba(76,81,191,1) 0%, rgba(102,126,234,1) 100%);

    ${tw`bg-blue-500 text-gray-100`}
    .planHighlight {
      ${tw`hidden`}
    }
    .duration {
      ${tw`text-gray-200!`}
    }
    ${PlanFeatures} {
      ${tw`border-indigo-500`}
    .feature:not(.mainFeature) {
      ${tw`text-white!`}
    }
    ${BuyNowButton} {
      ${tw`bg-gray-100 text-blue-500 hocus:bg-gray-300 hocus:text-blue-800`}
  `}
`;

const PlanFeatures = styled.div`
  ${tw`flex flex-col -mx-8 px-8 py-8 border-t-2 border-b-2 flex-1`}
  .feature {
    ${tw`mt-5 first:mt-0 font-medium`}
    &:not(.mainFeature) {
      ${tw`text-gray-600`}
    }
  }
  .mainFeature {
    ${tw`text-xl font-bold tracking-wide`}
  }
`;

const PlanAction = tw.div`px-4 sm:px-8 xl:px-16 py-8`;
const BuyNowButton = styled(PrimaryButtonBase)`
  ${tw`rounded-full uppercase tracking-wider py-4 w-full text-sm hover:shadow-xl transform hocus:translate-x-px hocus:-translate-y-px focus:shadow-inner`}
`;

const DecoratorBlob = styled(SvgDecoratorBlob)`
  ${tw`pointer-events-none absolute left-0 bottom-0 h-64 w-64 opacity-25 transform -translate-x-1/2 translate-y-1/2`}
`;

const Cards = ({cards}) => {
    
    const highlightGradientsCss = [
        css`
          background: rgb(56, 178, 172);
          background: linear-gradient(115deg, rgba(56, 178, 172, 1) 0%, rgba(129, 230, 217, 1) 100%);
        `,
        css`
          background: rgb(56, 178, 172);
          background-image: linear-gradient(115deg, #6415ff, #7431ff, #8244ff, #8e56ff, #9a66ff);
        `,
        css`
          background: rgb(245, 101, 101);
          background: linear-gradient(115deg, rgba(245, 101, 101, 1) 0%, rgba(254, 178, 178, 1) 100%);
          color: rgb(255, 255, 255) !important;
        `,
        css`
          color: rgb(250, 145, 145) !important;
          background: rgb(255, 255, 255) !important;
        `
      ];

    return (
        <>
        <PlansContainer style={{marginBottom:80}}>
        <Row xs={1} md={3} className="justify-content-center">
          {cards.map((card, index) => (
            <Plan key={index} featured={card.featured} css={(card.featured && card.type === 2 && highlightGradientsCss[2])}>
                {console.log(index, 'is featured: ', card.featured)}
              {!card.featured && <div className="planHighlight" css={highlightGradientsCss[card.type]} />}
              <PlanHeader>
                <span className="name">{card.name}</span>
                <span className="price">{card.price}</span>
                <span className="duration">{card.duration}</span>
              </PlanHeader>
              {!card.featured && <hr />}
              <PlanFeatures style={{paddingTop:0, paddingBottom:0}}>
                <span className="feature mainFeature">{card.mainFeature}</span>
                {card.features.map((feature, index) => (
                  <span key={index} className="feature">
                    {feature}
                  </span>
                ))}
              </PlanFeatures>
              {!card.featured && <hr />}
              <PlanAction>
                <BuyNowButton style={{borderColor:'#ffffff00'}} css={(!card.featured && highlightGradientsCss[card.type]) || (card.featured && card.type === 2 && highlightGradientsCss[3])}>{card.button}</BuyNowButton>
              </PlanAction>
            </Plan>
          ))}
          <DecoratorBlob/>
          </Row>
        </PlansContainer>          
        </>
    );
}

export default Cards;