$: setcpm(120/6)
$base: sound(`
[-  -  ht - ] [-  -  -  - ] [-  bd  -  - ] [-  ht  -  rd],
[hh lt -  - ] [hh -  mt - ] [hh -  mt - ] [hh -  lt - ],
[-  -  -  - ] [cp -  -  rim] [-  ht  -  - ] [cp -  -  rim],
[bd -  -  - ] [-  mt  -  bd] [-  -  bd - ] [-  -  -  bd],
[- jazz]*2`).lpf(2000).room(0.5).roomsize(2).vib(.9).duckorbit(2).duckattack(0.25)._scope()

$chord: chord("<An F Dm@2> *2").s("gm_electric_guitar_muted").voicing()
  // .adsr(0.2, 0.2, 0.8, 1.5)
  // .gain(.5)
  .room(0.9).roomsize(3)
  .orbit(2)

$: note("c3 bb2 f3 eb3")
  .sound("casio").lpf(2000)
  .adsr(".1:.1:.5:.2")
  .orbit(2)

$bass: note("<[c1 g1]*4 [bb0 f1]*4 [ab0 eb1]*4 [g0 d1]*4>")
  .sound("casio")
  .lpf(1000)
  .gain(0.8).room(0.5).roomsize(2)


$french: note("<[c4, e4, g4, b4] [a3, c4, e4, g4]>, jazz*2")
  .s("casio")
  .adsr(0.2, 0.5, 0.6, 3)
  .lpf(sine.range(400, 1200).slow(4)) 
  // .room(0.8)
  .gain(0.4)