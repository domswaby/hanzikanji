import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ContentWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  font-size: 1.5em;

  p {
    text-indent: 10%;
    margin: 1em auto 0 auto;
    line-height: 2em;
    width: 90%;

  }
  h2{
    font-size: 1.75em;
    margin-top: 1em;
    color: var(--dark-gray);
  }

  @media only screen and (max-width: 600px) {
    width: 90%;
    font-size: 1.2em;
    h2{
      font-size: 1.5em;
    }
    p{
      width: 95%;
    }
}
`;

const AboutContent = (props) => {
  return (
    <ContentWrapper>
      <h2 id="p1">The Mission</h2>
      <p>
        HanziKanji is meant to be used as a study tool for learning Chinese characters (Hanzi) and / or
        Japanese characters (Kanji) using the Heisig method. The HanziKanji flashcards include mnemonic
        stories for all characters included in the Heisig books. As displayed in the example on the home page,
        each character is broken up into its radical parts, and each part is given a meaning. The mnemonic stories
        are then composed using each of these parts. HanziKanji has two separate decks which are, not surprisingly, a
        deck for Kanji, and a deck for Hanzi.  Although Heisig separates the Simplified and Traditional Hanzi, it makes
        little sense to only learn one of these character sets instead of both as they share so many characters.  To
        elucidate this, it's helpful to think about the Heisig books. The Heisig Simplified Hanzi book has 3010 characters.
        The Traditional Hanzi book has 3035 characters. The HanziKanji Hanzi deck mixed these two together, removed duplicate
        characters and wound up with 4143 characters total.  For that reason the Hanzi deck here is a mix of the Simplified Hanzi and Traditional Hanzi.
      </p>
      <h2 id="p2">Card Order</h2>
      <p>
        The order of the cards mirrors the order of the Heisig books.  With regards to the Kanji deck this is straightforward.
        The Hanzi deck on the other hand is slightly more complicated.  The order of both Simplified and Traditional Hanzi
        both preserve their orders from the Simplified and Traditional Hanzi books.  For easy reference to Heisig, the books
        are referenced by the same numbers here.  Uniquely Traditional characters (characters which appear in the Traditional Heisig book but DO NOT appear in
        the Simplified Heisig book) will have the same number as their Traditional Heisig book counterparts.  Uniquely Simplified characters will have the
        same number as their Simplified Heisig book counterparts.  However, duplicate characters (characters which are parts of both decks) will
        have the same number as their counterparts in the Traditioanl Heisig book.  As a result, some numbers will have two different characters
        attached to it as, for example, character #167 in the Simplified book might be a completely different character from #167 in the Traditional book.
        Scrolling through the decks on the list pages makes it easier to understand what I'm going on about here.
      </p>
      <h2 id="p3">Card Content</h2>
      <p>
        Each card contains a character, the character's meaning, a mnemonic story, and the radical parts of that character.  The radical parts are highlighted
        in the story with a unique color.  The meaning of the character is also highlighted in a unique color so that it's easy to recognized the meaning and radical parts,
        and contrast the two. The meanings of each part are also displayed at the bottom of the card.  These parts are sometimes actual meanings of the radical parts.  However
        sometimes these parts are given special meanings <b>just for the purposes of the mnemonic</b>.  Furthermore, these parts are sometimes complete characters in and of themselves,
        and appear earlier in the deck than the character of which they are a part.
      </p>
      <h2 id="p4">Future Updates</h2>
      <p>
        Ultimately HanziKanji will allow users to make an account and persist study data.  Specifically HanziKanji aims to implement a variant of the
        Supermemo algorithm, similar to the popular flashcard app Anki.  This will give users the ability to engage in a efficient study
        process.  However users will still be able to view the card decks in a purely reference mode (i.e. non-study mode).
      </p>
      <h2 id="p5" >Cang Jie (倉頡)</h2>
      <p class="cangjie">
        Although not real, <a href="https://en.wikipedia.org/wiki/Cangjie" target="_blank">Cang Jie</a> is the literary and literally four-eyed legendary creator of Hanzi.
        Historically, Hanzi came first, and then Kanji.  So to make it more fun we can pretend to have Cang Jie to thank for all of these cool characters!  For this reason he enjoys his rightful place
        in literature, and in HanziKanji.
      </p>
    </ContentWrapper>
  );
};

export default AboutContent;
