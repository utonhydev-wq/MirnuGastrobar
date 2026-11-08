import test from "node:test";
import assert from "node:assert/strict";
import { RESTAURANT_DATA, getRestaurantCurrentStatus } from "./data/restaurantData";

test("RESTAURANT_DATA has exact official links and images", () => {
  assert.equal(RESTAURANT_DATA.name, "Mirnu Gastrobar");
  assert.equal(RESTAURANT_DATA.logoUrl, "https://i.postimg.cc/T1NQ5y0Q/logo.jpg");
  
  assert.equal(
    RESTAURANT_DATA.gallery[0].url,
    "https://i.postimg.cc/JzVZ6cs5/mirnugastrobar-1793628003-4021519516765074416-6189682257.jpg"
  );
  assert.equal(
    RESTAURANT_DATA.gallery[1].url,
    "https://i.postimg.cc/zGZKtSyp/mirnugastrobar-1793628003-4021519516773492525-6189682257.jpg"
  );
  assert.equal(
    RESTAURANT_DATA.gallery[2].url,
    "https://i.postimg.cc/Mp2VPbn5/mirnugastrobar-1793628003-4021519517008347413-6189682257.jpg"
  );

  assert.equal(
    RESTAURANT_DATA.ifoodLink,
    "https://www.ifood.com.br/delivery/jaboatao-dos-guararapes-pe/mirnu-gastrobar---marmita-prazeres/b68afd37-5316-404e-b1d5-fdf617a92e7c"
  );
  assert.equal(RESTAURANT_DATA.mapsLink, "https://maps.app.goo.gl/JUJ9TRm8VVMDgE379");
  assert.equal(
    RESTAURANT_DATA.reviewLink,
    "https://search.google.com/local/writereview?placeid=ChIJZ0GeCgDhqgcRy7Se9M_0kkg"
  );
  assert.equal(RESTAURANT_DATA.instagramUrl, "https://www.instagram.com/mirnugastrobar/");
  assert.equal(
    RESTAURANT_DATA.facebookUrl,
    "https://www.facebook.com/profile.php?id=61570003875359"
  );
  assert.ok(RESTAURANT_DATA.whatsappLink.includes("5581992715946"));
});

test("getRestaurantCurrentStatus returns valid status object", () => {
  const status = getRestaurantCurrentStatus();
  assert.ok(typeof status.isOpen === "boolean");
  assert.ok(status.statusLabel.length > 0);
  assert.ok(status.statusDetail.length > 0);
  assert.ok(["lunch", "happy_hour", "closed"].includes(status.period));
});
