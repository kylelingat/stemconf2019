import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

export default class Information extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="informationContainer">
        <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                What is the Hui Manu-o-Kū?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                The Hui Manu-o-Kū is a group of conservationists and citizens
                that all have one thing in common: an interest and admiration
                for White Terns, or Manu-o-Kū. This group has formed to ensure
                that the official bird of Honolulu is taken care of and watched
                after. Manu-o-Kū is a very unique bird, especially for an urban
                center like Honolulu. We developed a citizen science initiative
                to help track the growing population in the city. Together, the
                Hui Manu-o-Kū and citizen scientists will ensure that the
                population is protected and cared for, so that they continue to
                thrive in Honolulu.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                How do I care for the Manu-o-Kū?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                If you find a chick on the ground...
                <ol>
                  <li>
                    If you know exactly where its nesting spot was, and are able
                    to put it back, do so.
                  </li>
                  <li>
                    Call the Manu-o-Ku Hotline at{" "}
                    <a href="tel:8083797555">(808) 379-7555</a>; or one of the
                    following numbers if appropriate; or one of the people
                    listed in the next section below.
                    <ul>
                      <li>
                        If at UH Mānoa&nbsp;
                        <a href="tel:(808)%20956-4626" target="_blank">
                          (808) 956-4626
                        </a>
                      </li>
                      <li>
                        If at Punahou School&nbsp;
                        <a href="tel:(507)%20363-0402" target="_blank">
                          (507) 363-0402
                        </a>
                        &nbsp;or&nbsp;
                        <a href="tel:(808)%20561-8502" target="_blank">
                          (808) 561-8502
                        </a>
                        &nbsp;
                      </li>
                    </ul>
                  </li>
                  <li>
                    While waiting for assistance, stay nearby, or arrange to
                    have someone stay nearby, to keep predators away from the
                    chick.
                  </li>
                  <li>
                    If staying nearby is impossible, place the chick as high off
                    the ground as possible, close to the site at which you found
                    it, and make sure the first responder will be able to locate
                    the chick.
                  </li>
                </ol>
                <em>
                  &#8203;
                  <strong>
                    Chicks are at their most vulnerable when on the ground; your
                    actions could be critical to a successful nesting season!
                  </strong>
                </em>
                If you find an adult Manu-o-Kū on the ground, it is likely
                injured. Please contact one of the people below, and&nbsp;
                <a
                  href="http://www.whiteterns.org/injuredbird.html"
                  target="_blank"
                >
                  click here
                </a>
                &nbsp;for more infor<font color="#626262">mation.</font>
                <ul>
                  <li>
                    Manu-o-Ku Hotline -{" "}
                    <a href="tel:8083797555">(808) 379-7555</a>
                  </li>
                  <li>
                    <font color="#626262">
                      Jason Misaki, Hawai’i Division of Forestry and Wildlife
                      –&nbsp;<a href="tel:8089739786">(808) 973-9786</a>
                      &nbsp;or&nbsp;<a href="tel:8082955896">(808) 295-5896</a>
                      &nbsp;(cell)
                    </font>
                  </li>
                  <li>
                    <font color="#626262">
                      Hawai’i Wildlife Center (located on Big Island but can
                      answer questions) –&nbsp;
                      <a href="tel:8088845000">(808) 884-5000</a>
                    </font>
                  </li>
                  <li>
                    <font color="#626262">
                      Jenny Hoskins, U.S. Fish and Wildlife Service,&nbsp;
                      <a href="mailto:jenny_hoskins@fws.gov" target="_blank">
                        jenny_hoskins@fws.gov
                      </a>
                      &nbsp;or&nbsp;<a href="tel:8082819129">(808) 281-9129</a>
                    </font>
                  </li>
                </ul>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Tree trimming with care</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Tree trimmers have a delicate relationship with Manu-o-K​ū. If
                trimming isn't done with care, branches that host a nest may be
                lost. A chick that falls from its nest to the ground will likely
                die because either the parents won't be able to care for it or
                it may be attacked by a predator. However, tree trimming can
                actually be beneficial to Manu-o-Kū. Trimming can lead to a scar
                or cup to be formed in the branch. This creates an ideal nesting
                site that will protect the egg and chick. Keeping a tree trimmed
                can also make it easier for adults to fly in and out of the
                tree. Tree trimming may be one explanation for why there are so
                many Manu-o-Kū in Honolulu, but it must be done with the utmost
                care to ensure no nesting sites are being destroyed.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Tree trimming tips for arborists and homeowners
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <ul>
                <li>
                  Before trimming a tree, inspect the canopy for Manu-o-K
                  <span>
                    ū, inspect the ground for entirely white droppings (looks
                    like white paint splatter) or white feathers and listen for
                    vocalizing terns. If you see a bird, egg or chick in the
                    tree or signs that they may nest in that tree, trimming
                    should be delayed.
                  </span>
                </li>
                <li>
                  Wait 80-90 days from the time an egg is laid or discovered or
                  35-45 days from the time an egg hatched/chick is discovered
                  before rechecking the tree.
                </li>
                <li>
                  Do not plan to trim trees that are likely to host a Manu-o-K
                  <span>
                    ū during the busiest part of their breeding season. While
                    they can nest at any time of the year, they busiest part of
                    their breeding season is&nbsp;January to June with a peak in
                    March. Large projects should wait until the end of the year
                    to minimize impacts on Manu-o-Kū.
                  </span>
                </li>
                <li>
                  <span>
                    &#8203;If a tree needs to be removed, it may be done and
                    should be done at any time that it is not occupied by an egg
                    or chick.
                  </span>
                </li>
                <li>
                  <span>
                    The most common trees in Honolulu that Manu-o-Kū nest in are
                    Kukui, Shower Tree, Monkeypod, Mahogany and Banyans.
                  </span>
                </li>
                <li>
                  If a chick is found on the ground, or an injured Manu-o-Kū is
                  found, please refer to the&nbsp;
                  <a href="/injuredterns.html">
                    Injured and Abandoned bird&nbsp;page
                  </a>
                  .
                </li>
                <li>
                  <span>&#8203;</span>
                  <font>
                    If you would like assistance in determining if a Manu-o-Kū
                    is nesting in a tree or area, you may&nbsp;
                    <a href="http://whiteterns.org/contact">contact us</a>. A
                    member of the Hui Manu-o-K
                  </font>
                  <span>
                    <font size="3">
                      ū would be more than happy to assist you.
                    </font>
                  </span>
                </li>
              </ul>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                If you find a chick alone in a tree...
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                This chick is not abandoned. Adult Manu-o-Kū fly to the ocean to
                feed, leaving their offspring alone at the nest site. Even
                day-old chicks are left by themselves for hours. The adults will
                return with fish to feed the chick throughout the day and will
                brood small chicks at night. If you find a chick by itself,
                please don’t worry – it's normal! Do not disturb the chick, its
                parents will return soon.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Volunteer with Hui Manu-o-K​ū
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                There are a variety of ways you can help conserve Manu-o-Kū. A
                citizen scientist can participate in mean incubation counts,
                report newly discovered nest sites and recently laid eggs in
                known sites and use photography to document development,
                behaviors, prey items and more. ​ If you are interested in
                becoming a citizen scientist you may review the Volunteer
                Training Packet and begin making observations. To become a
                registered volunteer, please send an email to hiaudsoc@pixi.com
                with "Hui Manu-o-Kū" as the subject and your name and contact
                information. Registered volunteers will stay up-to-date with
                Manu-o-K​ū events and be in contact with the Hui Manu-o-Kū.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Why are the Manu-o-Kū important to the islands?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Manu-o-Kū are important to our islands because ancient navigators
                used them as a means of navigating through the Pacific Ocean. Ancient
                navigators would look to the Manu-o-Kū for guidance to land due to
                their breeding and feeding habits.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                How can I spot a Manu-o-Kū nesting spot?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Manu-o-Kū, or white terns, are distinguishable by their large,
                beady eyes, pointy beak of medium length, and a fully white set of feathers.
                At nesting spots, one may typically see a singular egg on its own or under the 
                care of the adult tern.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Where can I find Manu-o-Kū?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                This depends on your location. On the island of Oahu, a majority of
                Manu-o-Kū may be found in urban areas from Honolulu all the way down to Kailua.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Where can I find info about local Manu-o-Kū?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                You can find information about Oahu's Manu-o-Kū by looking at the
                database on our website.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
}
