<template>
  <div class="text-left ml-5 mb-5 mt-3">
    <h1>Library</h1>
    <h6 class="lead">Books I've enjoyed reading</h6>
  </div>
  <div class="d-flex flex-row flex-wrap books justify-content-center">
    <div class="col-12 col-sm-4 col-lg-2 text-center">
      <img src="../../src/assets/books/harry_potter_6.jpeg" alt="Harry Potter 6" />
    </div>
    <div class="col-12 col-sm-4 col-lg-2 text-center">
      <img src="../../src/assets/books/essentialism.jpeg" alt="Essentialism" />
    </div>
    <div class="col-12 col-sm-4 col-lg-2 text-center">
      <img src="../../src/assets/books/win_friends_and_influence_people.jpeg" alt="Win Friends And Influence People" />
    </div>
    <div class="col-12 col-sm-4 col-lg-2 text-center">
      <img src="../../src/assets/books/the_privacy_mission.jpeg" alt="The Privacy Mission" />
    </div>
    <div class="col-12 col-sm-4 col-lg-2 text-center">
      <img src="../../src/assets/books/harry_potter_5.jpeg" alt="Harry Potter 5" />
    </div>
    <div class="col-12 col-sm-4 col-lg-2 text-center">
      <img src="../../src/assets/books/harry_potter_4.jpeg" alt="Harry Potter 4" />
    </div>
    <div class="col-12 col-sm-4 col-lg-2 text-center">
      <img src="../../src/assets/books/becoming_better_grownups.jpg" alt="Becoming Better Grownups" />
    </div>
    <div class="col-12 col-sm-4 col-lg-2 text-center">
      <img src="../../src/assets/books/brida.jpeg" alt="Brida" />
    </div>
    <div class="col-12 col-sm-4 col-lg-2 text-center">
      <img src="../../src/assets/books/dot_con.webp" alt="Dot Con" />
    </div>
    <div class="col-12 col-sm-4 col-lg-2 text-center">
      <img src="../../src/assets/books/rich_dad_poor_dad.jpeg" alt="Rich Dad, Poor Dad" />
    </div>
    <div class="col-12 col-sm-4 col-lg-2 text-center">
      <img src="../../src/assets/books/1984.webp" alt="1984" />
    </div>
    <div class="col-12 col-sm-4 col-lg-2 text-center">
      <img src="../../src/assets/books/the_alchemist.jpeg" alt="The Alchemist" />
    </div>
    <div class="col-12 col-sm-4 col-lg-2 text-center">
      <img src="../../src/assets/books/atomic_habits.jpeg" alt="Atomic Habits" />
    </div>
    <div class="col-12 col-sm-4 col-lg-2 text-center">
      <img src="../../src/assets/books/harry_potter_3.jpeg" alt="Harry Potter 3" />
    </div>
    <div class="col-12 col-sm-4 col-lg-2 text-center">
      <img src="../../src/assets/books/harry_potter_2.jpeg" alt="Harry Potter 2" />
    </div>
    <div class="col-12 col-sm-4 col-lg-2 text-center">
      <img src="../../src/assets/books/harry_potter_1.jpeg" alt="Harry Potter 1" />
    </div>
    <div class="col-12 col-sm-4 col-lg-2 text-center">
      <img src="../../src/assets/books/on_the_shortness_of_life.jpg" alt="On The Shortness of Life" />
    </div>
    <div class="col-12 col-sm-4 col-lg-2 text-center">
      <img src="../../src/assets/books/the_next_person_you_meet_in_heaven.jpeg"
        alt="The Next Person You Meet In Heaven" />
    </div>
    <div class="col-12 col-sm-4 col-lg-2 text-center">
      <img src="../../src/assets/books/forty_rules_of_love.jpeg" alt="Forty Rules of Love" />
    </div>
    <div class="col-12 col-sm-4 col-lg-2 text-center">
      <img src="../../src/assets/books/tuesdays_with_morrie.jpeg" alt="Tuesdays With Morrie" />
    </div>
    <div class="col-12 col-sm-4 col-lg-2 text-center">
      <img src="../../src/assets/books/the_five_people_you_meet_in_heaven.jpeg"
        alt="The Five People You Meet In Heaven" />
    </div>
    <div class="col-12 col-sm-4 col-lg-2 text-center">
      <img src="../../src/assets/books/the_alchemy_of_happiness.jpeg" alt="The Alchemy of Happiness" />
    </div>
    <div class="col-12 col-sm-4 col-lg-2 text-center">
      <img src="../../src/assets/books/i_cant_make_this_up.jpeg" alt="I Can't Make This Up" />
    </div>
    <div class="col-12 col-sm-4 col-lg-2 text-center">
      <img src="../../src/assets/books/saint_anything.jpg" alt="Saint Anything" />
    </div>
    <div class="col-12 col-sm-4 col-lg-2 text-center">
      <img src="../../src/assets/books/the_drunkards_walk.jpeg" alt="The Drunkards Walk" />
    </div>
    <div class="col-12 col-sm-4 col-lg-2 text-center">
      <img src="../../src/assets/books/the_glass_castle.jpg" alt="The Glass Castle" />
    </div>
    <div class="col-12 col-sm-4 col-lg-2 text-center">
      <img src="../../src/assets/books/a_long_way_gone.jpeg" alt="A Long Way Gone" />
    </div>
  </div>
</template>

<style>
.books {
  margin: 1rem;
}

.books img {
  height: 18rem;
}

div div {
  margin-bottom: 1.5rem;
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .books img {
    height: 16rem;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .books img {
    height: 15rem;
  }

  .books {
    margin: 1.5rem;
  }
}

/* X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .books img {
    height: 18rem;
  }
}

/* XX-Large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) {
  .books img {
    height: 20rem;
  }
}
</style>