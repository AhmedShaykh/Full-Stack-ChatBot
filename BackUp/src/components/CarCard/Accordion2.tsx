import React from 'react';
import { Accordion, AccordionSummary, Box, Typography } from '@mui/material';
import useStyles from "./stylesheet";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Accordion2 = () => {

    const classes = useStyles();

    return (
        <Box>
            <Accordion className={classes.Accordion}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.DialogTypo}>Final Rental Terms</Typography>
                </AccordionSummary>
                <Box className={classes.Accordion2}>
                    <Accordion className={classes.Accordion}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.DialogTypo}>Include in the Rental Price</Typography>
                        </AccordionSummary>
                        <Box className={classes.Accordion2Box}>
                            <Typography>
                                Insurance, Covers and Waivers
                            </Typography>
                            <Typography style={{ margin: "1rem 0", fontSize: "0.8rem", fontWeight: "600" }}>
                                Insurance Information
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                All rental cars must have Collision Damage Waiver (CDW) and Theft Protection (TP). Each policy will be either:
                            </Typography>

                            <ul>
                                <li>
                                    <Typography style={{ margin: "0.5rem 0", fontSize: "0.8rem" }}>
                                        included or
                                    </Typography>
                                </li>
                                <li>
                                    <Typography style={{ margin: "0.5rem 0", fontSize: "0.8rem" }}>
                                        purchasable from the rental company, or
                                    </Typography>
                                </li>
                                <li>
                                    <Typography style={{ margin: "0.5rem 0", fontSize: "0.8rem" }}>
                                        provided by your credit card company.
                                    </Typography>
                                </li>
                            </ul>

                            <Typography style={{ margin: "1rem 0", fontSize: "0.8rem", fontWeight: "600" }}>
                                Collision Damage Waiver (CDW)
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                If the car’s bodywork gets damaged, the most you’ll pay towards repairs covered by the Collision Damage Waiver is the damage excess. This cover is only valid if you stick to the terms of the rental agreement. It doesn’t cover other parts of the car (e.g. glass, wheels, interior, roof or undercarriage), or charges (e.g. for towing or off-road time), or anything in the car (e.g. child seats, GPS devices or personal belongings).
                            </Typography>

                            <Typography style={{ margin: "1rem 0", fontSize: "0.8rem", fontWeight: "600" }}>
                                Theft Cover
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                If the car is stolen, the most you’ll pay towards replacement costs covered by the policy is the theft excess. This cover is only valid if you stick to the terms of the rental agreement.
                            </Typography>

                            <Typography style={{ margin: "1rem 0", fontSize: "0.8rem", fontWeight: "600" }}>
                                Third-Party Liability (TPL)
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                Covers the driver’s liability for any injuries and property damage that are included in the policy. It does not cover injuries to the driver or damage to the rental car. This cover is only valid if you stick to the terms of the rental agreement.
                            </Typography>

                            <Typography style={{ margin: "1rem 0", fontSize: "0.8rem", fontWeight: "600" }}>
                                Loss or Damage
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                {`If the car is stolen, or seriously damaged, or damaged in an incident involving someone else, please contact the rental company and the police immediately. If you can't provide the necessary documents from the police, you'll be liable for the full cost of replacing/repairing the car. If the car gets slightly damaged, and no-one else is involved, please contact the rental company immediately.`}
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                The rental company is not liable for the loss of / theft of / damage to any belongings in the car, during or after the rental.
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                Damage to the car will be charged for by the car hire company after it is dropped off - and will incur a Damage Administration fee on top of the amount deducted from the excess.
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                Not included in the rental cover (CDW & TP)
                                <br />
                                Loss of / theft of / damage to: keys, aerials, jack, safety triangles and vests, windscreen wipers, petrol cap, luggage covers, or any other fixed or mobile component of the car.
                            </Typography>

                            <Typography style={{ margin: "1rem 0", fontSize: "0.8rem" }}>
                                Roadside assistance
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                When you pick your car up, please make sure you find out where the paperwork is kept. In most cases, it’ll be in the glove box or attached to the sun visor.
                            </Typography>

                            <Typography style={{ margin: "1rem 0", fontSize: "0.8rem" }}>
                                Mileage / Kilometres
                            </Typography>
                            <Typography style={{ margin: "1rem 0", fontSize: "0.8rem" }}>
                                Your rental includes unlimited free kilometres.
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                Changing the length of your rental can affect how many kilometres you can drive for free. It can also affect how much you will pay for each additional kilometre
                            </Typography>
                        </Box>
                    </Accordion>
                    <Accordion className={classes.Accordion}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.DialogTypo}>Not Included in the Rental Price</Typography>
                        </AccordionSummary>
                        <Box className={classes.Accordion2Box}>
                            <Typography style={{ margin: "1rem 0", fontSize: "1rem" }}>
                                Local Charges
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                {`This section shows charges that you’ll pay at the counter because of (a) where you're picking your car up, (b) who's driving, and (c) where you go during your rental. It doesn’t show other over-the-counter costs, such as charges for fuel, child seats or additional services.`}
                            </Typography>

                            <Typography style={{ margin: "1rem 0", fontSize: "0.8rem", fontWeight: "600" }}>
                                Fines
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                You are responsible for any charges and fines, including tolls, congestion charges, speeding tickets and parking or traffic fines.
                            </Typography>

                            <Typography style={{ margin: "1rem 0", fontSize: "1rem" }}>
                                Additional drivers
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                The main driver (the person named on the booking) must be present when you pick the car up, and must be the one who pays anything charged at the counter. There may be a daily fee for additional drivers. The rental terms, including age-related restrictions and fees, apply to any additional drivers.
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                An additional driver fee will apply for any additional driver: AED 15.00 per day, including tax.
                            </Typography>
                            <Typography style={{ margin: "1rem 0", fontSize: "1rem" }}>
                                Additional Fees at Drop-off
                            </Typography>

                            <Typography style={{ margin: "1rem 0", fontSize: "0.8rem", fontWeight: "600" }}>
                                After your rental
                            </Typography>
                            <Typography style={{ margin: "1rem 0", fontSize: "0.8rem" }}>
                                After your rental
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                If you’ve incurred any charges, such as speeding tickets or unpaid congestion charges, the car hire company will try to contact you when the authorities ask them who was driving. This could be months after your rental – and you’ll have to pay the company’s administration fee as well as the original charge.
                            </Typography>
                        </Box>
                    </Accordion>
                    <Accordion className={classes.Accordion}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.DialogTypo}>What you need at Pick-Up</Typography>
                        </AccordionSummary>
                        <Box className={classes.Accordion2Box}>
                            <Typography style={{ margin: "1rem 0", fontSize: "1rem" }}>
                                Acceptable forms of payment
                            </Typography>
                            <Typography style={{ margin: "1rem 0", fontSize: "0.8rem", fontWeight: "600" }}>
                                Accepted Credit Cards
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                The main driver must be in possession of a Credit Card in their own name when picking up the car. The Card must have enough available funds to cover the excess / deposit amount (which will be blocked on the Card for the duration of the rental). The Card will also be required to pay for local fees, extra equipment and anything purchased additionally at the car hire counter.
                            </Typography>

                            <Typography style={{ margin: "1rem 0", fontSize: "0.8rem", fontWeight: "600" }}>
                                Rules around payment cards
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                If you pay by credit card, your bank may charge you an international transaction fee.
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                Cards must be valid for a minimum of 6 months from the time that they are presented at the car hire counter.
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                The payment card(s) used at the rental counter must be in the name of the main driver (the person named on the booking).
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                Credit cards need to be activated for international transactions and for payments abroad.
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                {`You'll need to know the PIN of the payment card you are planning to use to pre-authorise your deposit.`}
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                This rental company won’t accept prepaid, recharge or virtual debit/credit cards.
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "1rem" }}>
                                Payment Cards
                            </Typography>

                            <Typography style={{ margin: "1rem 0", fontSize: "0.8rem", fontWeight: "600" }}>
                                Accepted payment cards
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                The counter staff can only accept the following credit cards for the deposit:
                                <br />
                                (you’ll need to have the physical card with you - and prepaid, recharge or virtual cards are not accepted).
                            </Typography>
                        </Box>
                    </Accordion>
                    <Accordion className={classes.Accordion}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.DialogTypo}>Deposits, Excess And Cover</Typography>
                        </AccordionSummary>
                        <Box className={classes.Accordion2Box}>
                            <Typography style={{ margin: "1rem 0", fontSize: "1rem" }}>
                                Cover information forms of payment
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                {`When you pick the car up, please make sure you read any terms and conditions before signing the rental agreement, including any terms of additional products you may purchase at the counter. It's very important that you understand the agreement/policy’s exclusions and limits, as well as the rules about anything you pay for at the rental counter.`}
                            </Typography>

                            <Typography style={{ margin: "1rem 0", fontSize: "1rem" }}>
                                Deposit / Excess
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                The rental company will require a security deposit of AED 3,000.00 when you pick your car up. The deposit will be returned after the rental, as long as all conditions have been met.
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                The car has a damage excess of AED 3,000.00 including tax.
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                The car has a theft excess of AED 3,000.00 including tax.
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                When you pick your car up, the counter staff will require a security deposit for the car. They may also require a security deposit for fuel in the tank and for certain extras (e.g. a child seat or GPS). After your rental, your deposit(s) will be returned.
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                Due to fluctuating foreign exchange rates and other possible banking charges, the car hire company cannot be held responsible for any difference between the amount paid and the amount refunded.
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                The Collision Damage Waiver and Theft Protection policies come with an ‘excess’. The excess is the amount that you will need to pay before the policy covers the rest of the cost (for anything the policy covers).
                            </Typography>

                            <Typography style={{ margin: "1rem 0", fontSize: "1rem" }}>
                                Additional Cover
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                {`At the car hire counter, you may decide to buy additional cover to reduce or remove your excess, or to cover things your Collision Damage Waiver (CDW) doesn't, such as tyres and windscreen.`}
                                <br />
                                {`Please note: If you do, the contract will be between you and the rental company – so you’ll need to contact them if you're dissatisfied with the policy or the cover it provides.`}
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>F
                                If youre involved in a single vehicle accident and/or the bodywork is particularly badly damaged, the excess will be higher.
                            </Typography>
                        </Box>
                    </Accordion>
                    <Accordion className={classes.Accordion}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.DialogTypo}>Fuel Policy</Typography>
                        </AccordionSummary>
                        <Box className={classes.Accordion2Box}>
                            <Typography style={{ margin: "1rem 0", fontSize: "1rem" }}>
                                Fuel Policies
                            </Typography>
                            <Typography style={{ margin: "1rem 0", fontSize: "0.8rem", fontWeight: "600" }}>
                                Like for like
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                {`When you pick your car up, the fuel tank will be full or partly full. You will leave a deposit to cover the cost of the fuel: the counter staff will block this money on your credit card. Just before you return your car, please replace the fuel you've used.`}
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                The fuel tank will be either full or part-full. When you pick the car up, please check how much fuel there is. On return, as long as youve replaced the fuel youve used, youll pay no fuel fees.
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                If theres any fuel missing when you drop your car off, youll be charged both a refuelling fee and the cost of the missing fuel (at the current market price per litre/gallon).
                            </Typography>
                        </Box>
                    </Accordion>
                    <Accordion className={classes.Accordion}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.DialogTypo}>Extra Serivces (payable at counter)</Typography>
                        </AccordionSummary>
                        <Box className={classes.Accordion2Box}>
                            <Typography style={{ margin: "1rem 0", fontSize: "1rem" }}>
                                One-way rules
                            </Typography>
                            <Typography style={{ margin: "1rem 0", fontSize: "0.8rem", fontWeight: "600" }}>
                                One-way rules
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                The cost of this service will be confirmed after you have made the booking and we have confirmed with the car company that this would be allowed.
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                International one-way rentals are not available.
                            </Typography>

                            <Typography style={{ margin: "1rem 0", fontSize: "0.8rem", fontWeight: "600" }}>
                                Cross-border
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                Please note that cross-border travel is not allowed with this car hire company.
                            </Typography>

                            <Typography style={{ margin: "1rem 0", fontSize: "0.8rem", fontWeight: "600" }}>
                                Boundary Rules
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                The car may not be taken out of the country in which the rental began.
                            </Typography>

                            <Typography style={{ margin: "1rem 0", fontSize: "1rem" }}>
                                Outside Office Hours
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                Out-of-hours service available on request: pick up / drop off the car outside the counter’s normal opening hours. There will be a charge for this, which you will pay when you sign the rental agreement.
                            </Typography>

                            <Typography style={{ margin: "1rem 0", fontSize: "1rem" }}>
                                Deliveries and Collections
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                If requested in advance, the car hire company may agree to deliver the car at the start of the rental. The cost will be paid to the car hire company on signing the rental agreement.
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                A delivery/collection service is available on request during office hours. The price will be AED 52.50 per way within city limits. Outside city limits the price will be AED 157.50 per way.
                            </Typography>

                            <Typography style={{ margin: "1rem 0", fontSize: "1rem" }}>
                                Taxes & Fees
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                Any additional services will be subject to any applicable sales taxes and location fees.
                            </Typography>
                        </Box>
                    </Accordion>
                    <Accordion className={classes.Accordion}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.DialogTypo}>Extra Equipment</Typography>
                        </AccordionSummary>
                        <Box className={classes.Accordion2Box}>
                            <Typography style={{ margin: "1rem 0", fontSize: "1rem" }}>
                                Pay local extras equipment
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                As explained during the booking process, extras (child seats, GPS, etc.) will be either:
                            </Typography>

                            <ul>
                                <li>
                                    <Typography style={{ margin: "0.5rem 0", fontSize: "0.8rem" }}>
                                        included in the cost of your rental, or
                                    </Typography>
                                </li>
                                <li>
                                    <Typography style={{ margin: "0.5rem 0", fontSize: "0.8rem" }}>
                                        ordered and paid for when booking your car, or
                                    </Typography>
                                </li>
                                <li>
                                    <Typography style={{ margin: "0.5rem 0", fontSize: "0.8rem" }}>
                                        requested when booking your car and paid for at pick-up (in which case, we can’t guarantee that they’ll be available, or that the price will be the same).
                                    </Typography>
                                </li>
                            </ul>

                            <Typography style={{ margin: "1rem 0", fontSize: "1rem" }}>
                                Extra Equipment Conditions
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                Additional extras will be subject to any applicable sales taxes and location taxes.
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                {`If an extra is lost, damaged or stolen, you'll pay a replacement fee.`}
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                If the car is picked up in one location and dropped off in another, the rental company may charge a One-Way Fee to cover the cost of returning an extra to the original location.
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                Please note: counter staff aren’t trained (or allowed) to fit baby / child / booster seats. You will need to fit these yourself.
                            </Typography>

                            <Typography style={{ margin: "1rem 0", fontSize: "1rem" }}>
                                Additional drivers
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                Maximum number of drivers 1 per rental
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                The car hire company’s age-related charges and restrictions will apply to all additional drivers.
                            </Typography>
                        </Box>
                    </Accordion>
                    <Accordion className={classes.Accordion}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.DialogTypo}>Important Information</Typography>
                        </AccordionSummary>
                        <Box className={classes.Accordion2Box}>
                            <Typography style={{ margin: "1rem 0", fontSize: "1rem" }}>
                                Important information
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                By making this booking, you’re confirming that you have read and accept the rental terms.
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                At the rental counter, customers will also sign a rental agreement before they give you the key. It’s important that you read that agreement carefully - and if anything isn’t clear, discuss it with the counter staff before you sign.
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                You rental company reserves the right to refuse a car if, in the counter staff’s opinion, the driver is unfit to drive or anyone in the group is threatening, abusive or in any way endangering the health and safety of other people. If this happens, you will not be entitled to any refund or compensation.
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                Please see ‘What you need at pick-up’ above - and note that the counter staff will not provide a car unless all requirements (age, driving licence, payment card, documentation, etc.) are met. If this happens, you will not be entitled to any refund or compensation.
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                Before you drive off, you must check the car and make sure that any damage is reported to the counter staff and noted on the rental agreement. Otherwise, you may end up being liable for that damage.
                            </Typography>

                            <Typography style={{ margin: "1rem 0", fontSize: "1rem", fontWeight: "600" }}>
                                Road rules
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                When you rent a car, you are agreeing to use it responsibly. You must not:
                            </Typography>

                            <ul>
                                <li>
                                    <Typography style={{ margin: "0.5rem 0", fontSize: "0.8rem" }}>
                                        drive under the influence of alcohol, drugs, or any other type of narcotic substances
                                    </Typography>
                                </li>
                                <li>
                                    <Typography style={{ margin: "0.5rem 0", fontSize: "0.8rem" }}>
                                        transport any inflammable or dangerous goods, or any toxic, corrosive, radioactive or otherwise harmful substances
                                    </Typography>
                                </li>
                                <li>
                                    <Typography style={{ margin: "0.5rem 0", fontSize: "0.8rem" }}>
                                        carry anything which, because of its smell and/or condition, could damage the car or cause the rental company to lose time or money
                                    </Typography>
                                </li>
                                <li>
                                    <Typography style={{ margin: "0.5rem 0", fontSize: "0.8rem" }}>
                                        transport live animals
                                    </Typography>
                                </li>
                                <li>
                                    <Typography style={{ margin: "0.5rem 0", fontSize: "0.8rem" }}>
                                        install a roof rack, luggage carrier or anything similar, unless supplied by the rental company
                                    </Typography>
                                </li>
                                <li>
                                    <Typography style={{ margin: "0.5rem 0", fontSize: "0.8rem" }}>
                                        rent the car to anyone else
                                    </Typography>
                                </li>
                                <li>
                                    <Typography style={{ margin: "0.5rem 0", fontSize: "0.8rem" }}>
                                        carry passengers for hire or reward (taxi)
                                    </Typography>
                                </li>
                                <li>
                                    <Typography style={{ margin: "0.5rem 0", fontSize: "0.8rem" }}>
                                        participate in rallies, competitions or trials
                                    </Typography>
                                </li>
                                <li>
                                    <Typography style={{ margin: "0.5rem 0", fontSize: "0.8rem" }}>
                                        give driving lessons
                                    </Typography>
                                </li>
                                <li>
                                    <Typography style={{ margin: "0.5rem 0", fontSize: "0.8rem" }}>
                                        tow another vehicle
                                    </Typography>
                                </li>
                                <li>
                                    <Typography style={{ margin: "0.5rem 0", fontSize: "0.8rem" }}>
                                        travel on unpaved roads or roads where the surface or state of repair could damage the car
                                    </Typography>
                                </li>
                                <li>
                                    <Typography style={{ margin: "0.5rem 0", fontSize: "0.8rem" }}>
                                        in any way break the highway code, road traffic laws or other laws.
                                    </Typography>
                                </li>
                            </ul>

                            <Typography style={{ margin: "1rem 0", fontSize: "1rem", fontWeight: "600" }}>
                                Price calculation
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                Please note that exchange rates can fluctuate - and no-one in the car rental industry can do anything about this. As a result, you might find that charges on your statement aren’t an exact match with the price you were told while booking. The same goes for any refund you may receive.
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                Price Calculation - Prices are based on the pick-up and drop-off times and dates that you agree before your rental starts. If you pick the car up any later or bring it back any earlier, you will not receive a refund for unused time.
                            </Typography>
                            <Typography style={{ margin: "0.6rem 0", fontSize: "0.8rem" }}>
                                If, at pick-up, you choose to take a different car, there may be an additional charge for this – even if the new car is smaller than the one you had booked.
                            </Typography>
                        </Box>
                    </Accordion>
                </Box>
            </Accordion>
        </Box>
    )
};

export default Accordion2;
