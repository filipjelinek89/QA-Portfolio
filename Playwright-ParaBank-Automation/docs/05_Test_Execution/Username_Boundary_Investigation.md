# Username Boundary Investigation

## Objective

Determine the maximum accepted username length.

## Method

An exploratory Playwright investigation was performed using the following values:

- 19 characters
- 20 characters
- 21 characters

## Results

| Username Length | Result |
|-----------------|--------|
| 19 | Accepted |
| 20 | Accepted |
| 21 | Rejected |

## Conclusion

The username field accepts a maximum of **20 characters**.

## Observation

When the username exceeds 20 characters, the application displays the message:

"This username already exists."

This message is misleading because it does not indicate that the username length exceeds the supported boundary.