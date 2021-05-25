DROP TABLE IF EXISTS categories CASCADE;
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

INSERT INTO categories (name)
VALUES ('asian'),
       ('mexican'),
       ('mediterranean');

DROP TABLE IF EXISTS restaurants CASCADE;
CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  img_url VARCHAR(500) NOT NULL,
  website_url VARCHAR(500),
  phone_number VARCHAR(255),
  address VARCHAR(500),
  open_time INTEGER NOT NULL,
  close_time INTEGER NOT NULL,
  category_id INTEGER REFERENCES categories (id)
);

INSERT INTO restaurants
(name, img_url, website_url, phone_number, address, open_time, close_time, category_id)
VALUES ('Szechuan Cuisine', 'https://s3-media0.fl.yelpcdn.com/bphoto/bVfiE1oblDGdKfyGasmWOg/o.jpg',
        'https://szechuancuisinewa.com', '(425) 954-8227', '23202 57th Ave W Ste 4627', 11, 21, 1),
       ('Banh Mi Bites', 'https://s3-media0.fl.yelpcdn.com/bphoto/YGBYI9LKWtidH6JfUV704w/o.jpg',
        'https://www.banhmibites.com', '(425) 582-2243', '23601 56th Ave W Ste 600', 11, 19, 1),
       ('Alibertos', 'https://s3-media0.fl.yelpcdn.com/bphoto/YxR8hNQHi3on9ybXoKsU4w/o.jpg', NULL,
        '(425) 678-1813', '5602 232nd St SW Ste 101', 9, 21, 2),
       ('Taqueria Pollo Asado',
        'https://s3-media0.fl.yelpcdn.com/bphoto/_t6DMMDYIBfirPuZGS4ZUw/o.jpg', NULL,
        '(425) 876-3915', '2121 196th St SW', 8, 20, 2),
       ('Fork Mediterranean Grill',
        'https://s3-media0.fl.yelpcdn.com/bphoto/CugPX1j93Zgbh7z92JhnhA/o.jpg',
        'https://www.forkgrill.com', '(425) 835-0703', '21919 66th Ave W Ste G', 10, 21, 3),
       ('Aleppo Kitchen', 'https://s3-media0.fl.yelpcdn.com/bphoto/u2ACbM1dlCy8PECMH93WmA/o.jpg',
        'https://www.aleppokitchenseattle.com', '(425) 697-6610', '6815 196th St SW', 14, 20, 3);

DROP TABLE IF EXISTS reviews CASCADE;
CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  reviewer_name VARCHAR(255) NOT NULL,
  star_rating INTEGER NOT NULL,
  review TEXT,
  created_at TIMESTAMP,
  restaurant_id INTEGER REFERENCES restaurants (id)
);

INSERT INTO reviews
  (reviewer_name, star_rating, review, restaurant_id)
VALUES ('Foodie A.', 4,
        'I''m baby chia keffiyeh pop-up, mustache godard selvage blue bottle kitsch celiac ennui. Everyday carry truffaut normcore put a bird on it green juice chartreuse. Lyft prism tilde glossier roof party.',
        1),
       ('Goodie B.', 3,
        'Gochujang +1 brooklyn cornhole, pitchfork tofu umami vaporware pork belly before they sold out waistcoat lumbersexual. Wolf keytar trust fund hammock thundercats.',
        1),
       ('Hoodie C.', 5,
        'Tacos asymmetrical tbh narwhal art party humblebrag gentrify selvage four dollar toast. Vape kinfolk lomo, mlkshk swag fam selfies art party succulents jianbing.',
        1),
       ('Joodie D.', 2,
        'Vinyl deep v green juice, poutine tumblr dreamcatcher quinoa. Messenger bag semiotics meditation, shabby chic selfies swag activated charcoal hexagon shoreditch occupy.',
        2),
       ('Koodie E.', 3,
        'Roof party four loko shabby chic, poutine gochujang tofu umami banjo heirloom mustache. Four loko affogato ennui roof party chicharrones mlkshk irony bushwick.',
        2),
       ('Loodie F.', 1,
        'Four loko readymade brooklyn whatever ethical. 8-bit plaid kombucha, actually distillery humblebrag asymmetrical forage yr waistcoat fashion axe.',
        3),
       ('Moodie G.', 5,
        'Offal synth drinking vinegar shabby chic deep v lomo, next level skateboard 90''s leggings wolf poke PBR&B prism kale chips. Banh mi semiotics cold-pressed tofu.',
        4),
       ('Noodie H.', 2,
        'Vice try-hard edison bulb fixie microdosing woke art party narwhal ennui bicycle rights. Vaporware normcore polaroid bespoke blue bottle post-ironic.',
        4);
