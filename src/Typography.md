# Typography

Typography is used to create clear hierarchies and useful organizations. These help guide users through the product experience. Kelley Blue Book utilizes Montserrat for heading styles and Open Sans for body styles.

```javascript
  import { fonts } from '@argo/principles';

    const StyledText = styled.p`
      font-size: ${fonts.size.large};
      font-family: ${fonts.family.montserrat};
      font-weight: ${fonts.weight.semiBold};
    `;
```

## Montserrat
Used for Heading / Titles / Labels / Buttons / Highlight Text.

Available Font weight : Medium(500), Semi Bold(600), Extra Bold(800)

Font color Black #000000.

## Open Sans
Used for body and paragraph styles.

Available Font weight : Regular(600), Semi Bold(400)

Font color Charcoal #505050

Open Sans type may use any of the following treatments:
Regular, __Underline__ , _italic_ , *Bold*, **_Bold italic_**
