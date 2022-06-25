import React from "react";

const TestimonialCard = () => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card__wrapper">
        <img src="/images/profile-user.png" alt="user photo" />
        <div className="testimonial-card__wrapper__user">
          <div className="testimonial-card__wrapper__user__name">Luna</div>
          <div className="testimonail-card__wrapper__user__date">
            24 January 2021
          </div>
        </div>
      </div>
      <p className="testimonial-card__content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum
        ultricies nunc platea donec ligula nunc, sagittis. Morbi at eget erat
        sit. Non ac tortor, odio commodo. Felis nunc, luctus nunc amet. Volutpat
        mattis nec quis porta at ultrices. Est tristique nunc donec fringilla
        amet integer. Eleifend ut id nibh imperdiet ac risus. Non elementum
        sagittis, tempor egestas tortor, tristique nibh. Risus viverra facilisis
        eget lorem massa nullam et. Feugiat ac id elementum accumsan sit.
        Habitant risus montes, interdum vitae volutpat tincidunt. Tincidunt sit
        aenean ultrices vel vestibulum ligula vivamus. Auctor leo morbi in
        sagittis risus, dui. Nam sagittis, proin magna elementum vel faucibus
        congue.
      </p>
    </div>
  );
};

export default TestimonialCard;
