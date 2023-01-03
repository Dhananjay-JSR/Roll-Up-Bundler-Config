// @ts-nocheck
import request, { gql } from "graphql-request";

export function MockFunction(){
  
  const GPLScheme = gql`
       
  query{
      breakpoints {
        data {
          attributes {
            label
            width
            device_name
          }
        }
      }
      borderPresets {
        data {
          attributes {
            label
            style
            width
          }
        }
      }
      colorPalettes {
        data {
          attributes {
            error {
              code
              id
              label
              opacity
            }
            label
            neutral {
              code
              id
              label
              opacity
            }
            primary {
              code
              id
              label
              opacity
            }
            secondary {
              code
              id
              label
              opacity
            }
            success {
              code
              id
              label
              opacity
            }
            tertiary {
              code
              id
              label
              opacity
            }
            warning {
              code
              id
              label
              opacity
            }
          }
        }
      }
      radiusPresets {
        data {
          attributes {
            label
            value
          }
        }
      }
      shadowPresets {
        data {
          attributes {
            blur
            inset
            label
            spread
            x
            y
          }
        }
      }
      textstyles(pagination: { limit: 100 }) {
        data {
          attributes {
            breakpoint {
              data {
                attributes {
                  label
                  width
                }
              }
            }
            fontfamily
            fontsize
            fontweight
            label
            letter_spacing
            line_height
          }
        }
      }
    }
      `
  
   const theme: any = {};
  
  
      
  
      request('https://strapi.dev.web3p.in/graphql', GPLScheme).then((dataFetch) => {
  
      dataFetch.breakpoints.data.forEach(
          (breakpoint: { attributes: { label: string; width: string } }) => {
            theme["breakpoints"] = {
              ...theme["breakpoints"],
              [breakpoint.attributes.label]: breakpoint.attributes.width,
            };
          }
        );
      
        dataFetch.borderPresets.data.forEach(
          (border: {
            attributes: { label: string; width: string; style: string };
          }) => {
            theme["borderPresets"] = {
              ...theme["borderPresets"],
              [border.attributes
                .label]: `${border.attributes.width} ${border.attributes.style}`,
            };
          }
        );
      
        dataFetch.colorPalettes.data.forEach(
          (colorPalette: {
            attributes: {
              label: string;
              error: string[];
              neutral: string[];
              primary: string[];
              secondary: string[];
              success: string[];
              tertiary: string[];
              warning: string[];
            };
          }) => {
            theme["colorPalettes"] = {
              ...theme["colorPalettes"],
              [colorPalette.attributes.label]: {
                error: colorPalette.attributes.error.reduce(
                  (acc: string, curr: { label: string; code: string }) => ({
                    ...acc,
                    [curr.label]: curr.code,
                  }),
                  {}
                ),
                neutral: colorPalette.attributes.neutral.reduce(
                  (acc: string, curr: { label: string; code: string }) => ({
                    ...acc,
                    [curr.label]: curr.code,
                  }),
                  {}
                ),
                primary: colorPalette.attributes.primary.reduce(
                  (acc: string, curr: { label: string; code: string }) => ({
                    ...acc,
                    [curr.label]: curr.code,
                  }),
                  {}
                ),
                secondary: colorPalette.attributes.secondary.reduce(
                  (acc: string, curr: { label: string; code: string }) => ({
                    ...acc,
                    [curr.label]: curr.code,
                  }),
      
                  {}
                ),
                success: colorPalette.attributes.success.reduce(
                  (acc: string, curr: { label: string; code: string }) => ({
                    ...acc,
                    [curr.label]: curr.code,
                  }),
                  {}
                ),
                tertiary: colorPalette.attributes.tertiary.reduce(
                  (acc: string, curr: { label: string; code: string }) => ({
                    ...acc,
                    [curr.label]: curr.code,
                  }),
                  {}
                ),
                warning: colorPalette.attributes.warning.reduce(
                  (acc: string, curr: { label: string; code: string }) => ({
                    ...acc,
                    [curr.label]: curr.code,
                  }),
                  {}
                ),
              },
            };
          }
        );
      
        dataFetch.textstyles.data.forEach(
          (textstyle: {
            attributes: {
              label: string;
              fontfamily: string;
              fontsize: string;
              fontweight: string;
              line_height: string;
            };
          }) => {
            theme["textstyles"] = {
              ...theme["textstyles"],
              [textstyle.attributes.label]: {
                fontfamily: textstyle.attributes.fontfamily,
                fontsize: textstyle.attributes.fontsize,
                fontweight: textstyle.attributes.fontweight,
                line_height: textstyle.attributes.line_height,
              },
            };
          }
        );
      
        dataFetch.radiusPresets.data.forEach(
          (radius: { attributes: { label: string; value: string } }) => {
            theme["radiusPresets"] = {
              ...theme["radiusPresets"],
              [radius.attributes.label]: radius.attributes.value,
            };
          }
        );
      
        dataFetch.shadowPresets.data.forEach(
          (shadow: {
            attributes: {
              label: string;
              x: string;
              y: string;
              blur: string;
            };
          }) => {
            theme["shadowPresets"] = {
              ...theme["shadowPresets"],
              [shadow.attributes
                .label]: `${shadow.attributes.x} ${shadow.attributes.y} ${shadow.attributes.blur} `,
            };
          }
        );
  
      })
  
      return theme
  }