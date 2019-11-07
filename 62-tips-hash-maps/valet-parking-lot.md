# Valet Parking Lot
* Imagine you own a large valet parking lot.
* Draw a parking lot on the whiteboard
* Draw an attendant booth representing where you sit while you work.
* Your job as the valet is to do two things
  * Park people's cars when they come in
  * Retrieve people's cars when they leave.
* Let's find a good way to run an efficient business.

## Park the cars wherever is nearest
* Pros
  * You can park cars quick
* Cons
  * You have to look through all the cars on your way back to retrieve the proper one
  * Looking through all the cars is EXTREMELY inefficient when the parking lot is full

## Keep the cars sorted by license plate
* Pros
  * You know where cars are now
* Cons
  * It's terrible to rearrange the cars whenever a new car comes in the middle

## Use a Hash of License Plates to Determine A Parking Spot

Idea! What if we used someone's license plate as a way to determine which spot
they should park in?

Ideally everyone's license plate would be specially designed for OUR parking lot
where everyone's license plate just says "spot 34." Unfortunately, that's not how
the world works. We need to create something that converts general license
plates to our own parking lot.

How about this. Let's say our parking lot has `73` spots numbered `0` to `72`.
Let's take a license plate and strip the letters out of it. Then we'll use the
leftover number. If we take the number modulus the size of parking lot we can
derive the parking position that car should always park in.

* `B78198H` => 78198 => 78198 % 73 => 15 => park that car in spot 15`
* `648 AKM` => 648 => 648 % 73 => 64 => park that car in spot 64`
* `9LF 281`` => 9281 => 9281 % 73 => 10 => park that car in spot 10`

It's possible two different license plates might lead to the same parking spot.
We need a scheme to handle these "collisions." A scheme could be simply, keep
driving spot-by-spot until you find another spot.

When people come to retrieve their cars you need to look up what license plate
they had (I hope you wrote that down somewhere) then recalculate what parking
spot that plate leads to.

Go to the spot they are supposed to be and see if they are there. There may be
another unexpected car there. Go to the next spot over and see if they're there
instead. Go spot by spot until you find their car, or maybe they never really
parked here.

Even if you go to the spot where they should have parked and find it empty then
you still need to look spot by spot. They may have parked somewhere full initially
and then later that car left.

* Pros
  * You know where to park the car when people come in
  * You know where to find the car when you're retrieving it
  * This especially saves time when the parking lot is extremely full.
* Cons
  * People must remember their license plate (not a big deal in programming but
    a ramification of this real-world metaphor)
  * You have to go slightly further out of your way when parking cars because you
    may have to walk to far-away parking spots.
  * You have to deal with collisions if people's license plates end up in the same spot.
    * Make a rule that you just continue looking one-by-one until you find an open spot
    * Looking one-by-one could lead to large full chunks
    * Perhaps looking at spots every-7th-spot would be better
    * What's the best? 1-by-1 or every 7? Well, we'll leave that to the experts. We're
      here to understand this problem at a basic level, we won't provide a
      perfect solution for this part of the problem.

