# No Magic Numbers

## Overview

The no-magic-numbers rule helps to enforce code readability and maintainability by disallowing the use of magic numbers. A magic number is a numeric value that appears directly in the source code without a clear meaning or explanation. This rule will help prevent the use of such numbers by requiring them to be replaced with well-named constants or variables.

## Rule Details

This rule triggers a warning whenever a magic number is used in the code, except for the ones specified in the allowed list of magic numbers.
