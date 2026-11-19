---
name: areket.studio
description: A direct, motion-led portfolio for digital business work
colors:
  paper: "#e9eef0"
  ink: "#112632"
  soft: "#d9e3e6"
  line: "#bbcbd0"
  orange: "#bb3b23"
  orange-dark: "#ff8a6b"
  orange-surface: "#ee5b3e"
  blue: "#396cdf"
  muted: "#435863"
  panel: "#f8fbfa"
typography:
  display:
    fontFamily: "Barlow Condensed, Impact, sans-serif"
    fontSize: "clamp(66px, 5.4vw, 100px)"
    fontWeight: 700
    lineHeight: 0.88
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
rounded:
  control: "0px"
spacing:
  page-edge: "clamp(24px, 4vw, 72px)"
  section-block: "110px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "#ffffff"
    rounded: "{rounded.control}"
    padding: "18px 20px"
---

## Overview

The page speaks through large condensed type, direct statements and actual product evidence. Its cool paper ground and decisive orange areas keep the studio distinct from a default software dashboard.

## Colors

Ink carries structure and the dark work section. Orange marks action and decisive phrases; its lighter dark-mode variant keeps text readable. The brighter orange surface is reserved for the closing call to action. Blue frames the real TaxiPark interface.

## Typography

Barlow Condensed gives display lines a compact, directional rhythm. Manrope carries controls and body copy. Display text is uppercase; body copy stays in sentence case.

## Layout

The first viewport splits the offer and an actual interface. Later sections alternate asymmetrical editorial layouts and a Bootstrap responsive two-column project grid. At 800px the hero stacks; at 560px content becomes single-column.

## Elevation & Depth

Most surfaces are flat. The hero screenshot uses one offset neutral shadow to read as a real browser window.

## Shapes

Buttons, filters, project rows and form fields have square corners. Only the project's round arrow control uses a circular shape.

## Components

Links move a few pixels or draw an underline. Project rows expose an image reel on pointer hover, adapted from OriginKit's Hover Image Reveal preset. Service links switch their text from the cursor's entry edge, adapted from Direction Hover. The project's detail dialog uses the native dialog element. The hero enters once. Broad light ribbons in the blue visual and orange closing panels bend toward the pointer, inspired by OriginKit's Ribbon Glow, Variant 1; they stay still on touch devices or under reduced motion.

## Do's and Don'ts

- Use actual project evidence and plainly label unavailable detail.
- Keep form behavior honest: requests are saved locally and the visitor confirms sending in WhatsApp.
- Keep motion bounded to the hero, hover feedback and cursor-reactive ribbons.
