# Coast Guard GAR App in React Native

We are going to build a Risk Assessment and Management tool to be used by the Coast Guard in React Native.

** There are 6 elements of GAR Assessment:**
1. Supervision: Supervisor Qualification/Engagement
2. Planning: Time, Effort, Quality
3. Crew Selection: Assignment vs. Experience
4. Crew Fitness: Physical/Mental State
5. Environment
6. Event or Evolution Complexity

Each element is ranked on a scale of 1-10 (10 being max risk). Once all 6 elements scores' have been added together, the risk level is evaluated on the following scale:
* **0-23: Green** - Low Risk
* **24-44: Amber** - Moderate Risk: Consider adopting procedures to mitigate
* **45-60: Red** - Should mitigate before starting event/evolution

We are going to follow the design of Riley's [Coast GAR'd App](https://itunes.apple.com/us/app/coast-gard/id836022547?mt=8)

## Project Steps

1. Initialize React Native App
2. Stub out GAR component with View, Text, and Sliders
3. Add state for 6 risk elements
4. Create custom `_total()` method
5. Add custom `_color()` method to update header bar styles
6. Update styles
<details>
  <summary>Want a hint?</summary>
  check out PixelRatio react-native class
</details>
7. Add Reset button and functionality  
<details>
  <summary>Want a hint?</summary>
  check out TouchableHighlight react-native class
</details>

## Groups

- Matt C, Sophia

- Andrew, Wes

- Jesse, Matt R

- Gerry, Jay

- Francisco, Peter

- Karla, Dazaev

- TJ, Carrington

- Devin, James

- Raul, Natasha
