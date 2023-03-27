const mathsnote={
    chapter1:{
        title:"Real Numbers",
        chapterIntro:'In this chapter, you will learn about real numbers and their properties. You will also learn how to find the HCF and LCM of given numbers and solve some problems based on the Euclid s division lemma.',
        topics1:' 1.1 Introduction to Real Numbers',
        topic2:'1.2 Euclid s Division Lemma',
        topic3:'1.3 HCF and LCM',
        topic4:'1.4 Revisiting Irrational Numbers',
        topic5:'1.5 Summary',

        note1:'Real numbers include all rational and irrational numbers. Rational numbers can be expressed as p/q where p and q are integers, and q is not equal to zero. Irrational numbers cannot be expressed as p/q.',
        note2:'Given two positive integers a and b, there exist unique integers q and r such that a = bq + r, where 0 ≤ r < b.',
        note3:'HCF or Highest Common Factor is the largest number that divides two or more given numbers without leaving a remainder. LCM or Least Common Multiple is the smallest number that is a multiple of two or more given numbers.',
        note4:'Irrational numbers cannot be expressed as p/q. Some examples of irrational numbers are √2, √3, and π.',
        note5:'Real numbers include all rational and irrational numbers. Euclid s division lemma helps us find the quotient and remainder when dividing two numbers. HCF is the largest number that can divide two or more numbers without leaving a remainder, while LCM is the smallest number that is a multiple of two or more numbers. Irrational numbers cannot be expressed  p/q.',

        example1:'',
        example2:'For example, if we divide 17 by 5, we get 17 = 5 x 3 + 2, where 3 is the quotient and 2 is the remainder.',
        example3:'For example, the HCF of 12 and 18 is 6 as it is the largest number that can divide both 12 and 18 without leaving a remainder. The LCM of 12 and 18 is 36 as it is the smallest number that is a multiple of both 12 and 18.',
        example4:'For example, if we try to express √2 as a fraction, we get a never-ending decimal, which means it is irrational.',
        example5:'I hope this summary and explanation of Chapter 1 of Mathematics was helpful. Let me know if you have any further questions.',

        link:'',
    },
    chapter2:{
        title:'Polynomials',
        chapterIntro:'In this chapter, you will learn about polynomials, which are expressions that contain variables and coefficients. You will learn about different types of polynomials, their degrees, and how to perform operations on them.',

        topic1:'2.1 Introduction to Polynomials',
        topic2:'2.2 Types of Polynomials',
        topic3:'2.3 Degree of Polynomials',
        topic4:'2.4 Addition and Subtraction of Polynomials',
        topic5:'2.5 Division Algorithm for Polynomials',

        note1:'A polynomial is an expression that contains variables and coefficients, and can include addition, subtraction, multiplication, and division. For example, 3x^2 + 2x - 1 is a polynomial.',
        note2:'There are different types of polynomials, including monomials, binomials, trinomials, and higher-order polynomials. Monomials have only one term, while binomials have two terms, trinomials have three terms, and higher-order polynomials have more than three terms.',
        note3:'The degree of a polynomial is the highest power of the variable in the polynomial. For example, in the polynomial 3x^2 + 2x - 1, the degree is 2 because the highest power of x is 2.',
        note4:'To add or subtract polynomials, we simply combine the like terms, which are terms that have the same variable and degree. For example, to add 3x^2 + 2x - 1 and 2x^2 - 3x + 4, we combine the like terms to get 5x^2 - x + 3.',
        note5:'The division algorithm for polynomials states that given two polynomials f(x) and g(x), there exist unique polynomials q(x) and r(x) such that f(x) = g(x)q(x) + r(x), where the degree of r(x) is less than the degree of g(x).',

        example1:'In this polynomial, x is the variable, 3 and 2 are coefficients, and ^2 represents the degree of the variable.',
        example2:'For example, 2x^3 is a monomial, 3x^2 + 5x is a binomial, 4x^2 - 2x + 1 is a trinomial, and 2x^5 + 3x^4 - 2x^2 + 5x - 1 is a higher-order polynomial.',
        example3:'In a polynomial with only one term, the degree is the same as the power of the variable. For example, the degree of 4x^3 is 3, and the degree of 7 is 0.',
        example4:'Similarly, to subtract 3x^2 + 2x - 1 from 2x^2 - 3x + 4, we first change the signs of the terms in the second polynomial to get 2x^2 - 3x + 4 - 3x^2 - 2x + 1, and then combine the like terms to get -x^2 - x + 5.',
        example5:'For example, if we divide x^2 + 2x + 1 by x + 1, we get x + 1 as the quotient and 0 as the remainder. So, x^2 + 2x + 1 = (x + 1)(x + 1).',

    },
    chapter3:{
        title:'',
        chapterIntro:'In this chapter, you will learn about the pair of linear equations in two variables. You will study how to represent them graphically and algebraically, and how to solve them by different methods. You will also learn about the consistency and inconsistency of the equations and their applications in real-life situations.',

        topic1:'3.1 General form of a linear equation',
        topic2:'3.2 Graphical method',
        topic3:'3.3 Algebraic methods',
        topic4:'3.3.1 Substitution method',
        topic5:'3.3.2 Elimination method',
        topic6:'3.3.3 Cross-multiplication method',
        topic7:'3.4 Conditions for consistency',
        topic8:'3.5 summary',

        note1:'The general form of a linear equation is given by ax + by + c = 0, where a, b, and c are real numbers. Each solution (x, y) corresponds to a point on the line',
        note2:'The graphical method involves plotting the lines represented by the pair of linear equations on the same graph and finding their point of intersection. The coordinates of the point of intersection are the solution to the pair of linear equations.',
        note3:'There are several algebraic methods for finding the solutions to a pair of linear equations, including substitution method, elimination method, and cross-multiplication method.',
        note4:'This method involves solving one of the equations for one variable in terms of the other variable and then substituting this expression into the other equation to solve for the other variable.',
        note5:'This method involves adding or subtracting the two equations to eliminate one variable and then solving for the other variable.',
        note6:'This method involves cross-multiplying the coefficients of the two equations and then solving for one variable in terms of the other variable.',
        note7:' A system of linear equations is said to be consistent if it has at least one solution and inconsistent if it has no solution. The conditions for consistency depend on whether or not the coefficients of the two equations are proportional. **',
        note7subnote1:'If the coefficients are proportional (i.e., a1/a2=b1/b2), then: If c1/c2=a1/a2=b1/b2 then there are infinitely many solutions. , If c1/c2≠a1/a2=b1/b2 then there are no solutions.',
        note7subnote2:'If the coefficients are not proportional (i.e., a1/a2≠b1/b2), then there is exactly one solution.',

        link:''

    },
    chapter4:{
        title:'',
        chapterIntro:'Quadratic equations are equations of the form ax^2 + bx + c = 0, where a, b, and c are constants, and x is the variable. In this chapter, we will learn how to solve quadratic equations by different methods, including factorization, completing the square, and using the quadratic formula. We will also learn how to find the roots of a quadratic equation and its graphical representation.',

        topic1:'4.2 Quadratic Equations',
        topic2:'4.3 Solution of a Quadratic Equation by Factorisation',
        topic3:'4.4 Solution of a Quadratic Equation by Completing the Square',
        topic4:'4.5 Nature of Roots',
        topic5:'4.6 Summary',
       

        note1:'A quadratic equation is a second-degree polynomial equation in one variable, written in the form of ax^2 + bx + c = 0, where a, b, and c are constants and a ≠ 0.',
        note2:'A quadratic equation is an equation of the form ax^2 + bx + c = 0, where a, b, and c are constants and x is a variable. To solve a quadratic equation by factorisation, we need to find two factors of the quadratic expression ax^2 + bx + c that will result in the given equation being equal to zero.',
        note3:'To solve a quadratic equation by completing the square, we follow these steps: (1)Move the constant term to the right-hand side of the equation, leaving only the quadratic and linear terms on the left-hand side. (2) Divide both sides of the equation by the coefficient of the quadratic term so that the coefficient becomes 1. (3) Add and subtract the square of half of the coefficient of the linear term to the left-hand side of the equation. This step converts the left-hand side of the equation into a perfect square trinomial. (4) Simplify the right-hand side of the equation if possible. (5) Take the square root of both sides of the equation. (6) Solve for the variable. ',
        note4:'The nature of roots refers to the type of solutions that a quadratic equation has. There are three possible cases: (1) Real and distinct roots: A quadratic equation has two different real roots if its discriminant (b² - 4ac) is positive. For example, the quadratic equation x² - 5x + 6 = 0 has roots 2 and 3, which are real and distinct. (2) Real and equal roots: A quadratic equation has two equal real roots if its discriminant is zero. For example, the quadratic equation x² - 4x + 4 = 0 has only one root, 2, which is real and equal. (3) Imaginary roots: A quadratic equation has two imaginary roots if its discriminant is negative. For example, the quadratic equation x² + 2x + 5 = 0 has roots -1 + 2i and -1 - 2i, which are complex conjugates. To find the nature of roots of a quadratic equation, we can use the discriminant formula: b² - 4ac. If the discriminant is positive, the roots are real and distinct. If the discriminant is zero, the roots are real and equal. If the discriminant is negative, the roots are imaginary. ',
        note5:'Chapter 4 of Class 10 CBSE Maths NCERT covers the topic of quadratic equations. The chapter starts with an introduction to the concept of quadratic equations, followed by the methods of solving quadratic equations by factorization and completing the square. The chapter also covers the nature of roots of quadratic equations and how to find them. The discriminant is introduced as a tool for determining the nature of roots. The chapter ends with a summary of the main topics covered, including the graphical representation of quadratic equations and the application of quadratic equations in real-life situations such as finding the maximum or minimum value of a function.',
        

        example1:'To find the roots of the quadratic equation 2x^2 + 3x - 5 = 0, we can use the quadratic formula: x = (-3 ± √(3^2 - 4(2)(-5))) / 2(2) ;  x = (-3 ± √49) / 4; x = (-3 ± 7) / 4; So the roots of the quadratic equation are x = -2 and x = 5/2.',
        example2:'Let s take an example to understand this better. Consider the quadratic equation x^2 + 6x + 8 = 0. To solve this equation by factorisation, we need to find two factors of the quadratic expression x^2 + 6x + 8 that will result in the given equation being equal to zero. We can write this quadratic expression as (x + 4)(x + 2). Therefore, the quadratic equation x^2 + 6x + 8 = 0 can be written as (x + 4)(x + 2) = 0.',
        example3:'Solve the quadratic equation 2x^2 + 8x + 6 = 0 by completing the square. : (1) We move the constant term to the right-hand side: 2x^2 + 8x = -6. (2) We divide both sides of the equation by the coefficient of the quadratic term, which is 2: x^2 + 4x = -3. (3) To complete the square, we add and subtract (4/2)^2 = 4 to the left-hand side of the equation: x^2 + 4x + 4 - 4 = -3. (4) We simplify the left-hand side: (x+2)^2 - 4 = -3. (5) We simplify the right-hand side: (x+2)^2 = 1. (6) We take the square root of both sides of the equation: x+2 = ±1. (7) We solve for x: x = -2 ± 1. Therefore, the solutions of the given quadratic equation are x = -3 and x = -1.',
        example4:'For example, consider the quadratic equation x² - 6x + 9 = 0. The coefficients a, b, and c are 1, -6, and 9, respectively. The discriminant is b² - 4ac = (-6)² - 4(1)(9) = 0. Since the discriminant is zero, the roots of the equation are real and equal. We can factor the equation as (x - 3)² = 0 and find that the only root is x = 3.',

        link:''

    },
    chapter5:{
        title:'Arithmetic Progressions',
        chapterIntro:'Arithmetic Progression (AP) is a sequence of numbers in which each term is obtained by adding a constant value to the previous term. In this chapter, we will learn about the properties of AP and how to find the nth term and the sum of first n terms of an AP.',

        topic1:'5.2 Arithmetic Progressions',
        topic2:'5.3 nth Term of an AP',
        topic3:'5.4 Sum of First n Terms of an AP',
        topic4:'5.5 Summary',
        
        note1:'An Arithmetic Progression (AP) is a sequence of numbers in which the difference between any two consecutive terms is constant. The constant difference is denoted by d.',
        note2:'The nth term of an AP is given by the formula an=a1+(n-1)d, where a1 is the first term of the AP, d is the common difference, and n is the term number.',
        note3:'The sum of the first n terms of an AP is given by the formula Sn = n/2[2a1+(n-1)d], where a1 is the first term of the AP, d is the common difference, and n is the number of terms. ',
        note4:'In this chapter, we learned about arithmetic progressions and their properties, including the common difference, nth term, and sum of the first n terms. We also learned how to apply these formulas to solve problems involving arithmetic progressions.',

        example1:'For example, 2, 5, 8, 11, 14 is an AP with d=3.',
        example2:'For example, in the AP 2, 5, 8, 11, 14, the 7th term is a7 = 2 + (7-1)3 = 20.',
        example3:'For example, the sum of the first 5 terms of the AP 2, 5, 8, 11, 14 is S5 = 5/2[2(2)+(5-1)3] = 35.',
    },
    chapter6:{
        title:'Triangles',
        chapterIntro:'The concept of triangles is important in mathematics and geometry. Triangles are used to measure and calculate angles and sides of various objects. In this chapter, we will explore the concept of similarity of triangles and Pythagoras theorem.',

        topic1:'6.2 Similar Figures',
        topic2:'6.3 Similarity of Triangles',
        topic3:'6.4 Criteria for Similarity of Triangles',
        topic4:'6.5 Areas of Similar Triangles',
        topic5:'6.6 Pythagoras Theorem',
        topic6:'6.7 Summary',

        note1:'Two figures are said to be similar if they have the same shape, but not necessarily the same size. In other words, if one figure can be obtained by scaling (resizing) the other, then they are similar figures.',
        note2:'Two triangles are said to be similar if their corresponding angles are equal, and their corresponding sides are proportional.',
        note3:'There are three criteria for the similarity of triangles: i) AA criterion: Two triangles are similar if their corresponding angles are equal.    ii) SAS criterion: Two triangles are similar if their corresponding angles are equal, and the ratio of the lengths of the sides containing these angles is the same.iii) SSS criterion: Two triangles are similar if the ratio of the lengths of their corresponding sides is the same.',
        note4:'The area of two similar triangles is proportional to the square of the ratio of their corresponding sides. In other words, if the ratio of the lengths of corresponding sides of two similar triangles is a:b, then the ratio of their areas is a²:b².',
        note5:'Pythagoras theorem states that in a right-angled triangle, the square of the hypotenuse (the side opposite the right angle) is equal to the sum of the squares of the other two sides. This can be written as a² + b² = c², where c is the length of the hypotenuse and a and b are the lengths of the other two sides.',
        note6:'In summary, this chapter covers the concept of similarity of triangles, criteria for similarity, and their applications in calculating areas. Additionally, the Pythagoras theorem is explored, which is a fundamental concept in geometry and has many practical applications.',
        
        
        

        theorem1:'Theorem 6.1 : If a line is drawn parallel to one side of a triangle to intersect the other two sides in distinct points, the other two sides are divided in the same ratio.',
        theorem2:'Theorem 6.2 : If a line divides any two sides of a triangle in the same ratio, then the line is parallel to the third side',
        theorem3:'Theorem 6.3 : If in two triangles, corresponding angles are equal, then their corresponding sides are in the same ratio (or proportion) and hence the two triangles are similar. This criterion is referred to as the AAA (Angle Angle Angle) criterion of similarity of two triangles.',
        theorem4:'Theorem 6.4 : If in two triangles, sides of one triangle are proportional to (i.e., in the same ratio of ) the sides of the other triangle, then their corresponding angles are equal and hence the two triangles are similiar.',
        theorem5:'Theorem 6.5 : If one angle of a triangle is equal to one angle of the other triangle and the sides including these angles are proportional, then the two triangles are similar. This criterion is referred to as the SAS (Side Angle Side) similarity criterion for two triangles.',
        theorem6:'Theorem 6.6 : The ratio of the areas of two similar triangles is equal to the square of the ratio of their corresponding sides.',
        theorem7:'Theorem 6.7 : If a perpendicular is drawn from the vertex of the right angle of a right triangle to the hypotenuse then triangles on both sides of the perpendicular are similar to the whole triangle and to each other.',
        theorem8:'Theorem 6.8 : In a right triangle, the square of the hypotenuse is equal to the sum of the squares of the other two sides.',
        theorem9:'Theorem 6.9 : In a triangle, if square of one side is equal to the sum of the squares of the other two sides, then the angle opposite the first side is a right angle.',
        
    },
    chapter7:{
        title:'coordinate Geometry',
        chapterIntro:'Coordinate Geometry is a branch of mathematics that deals with the study of geometry through the use of coordinates. It involves studying geometric shapes such as lines, circles, triangles, and polygons using the coordinate system.',

        topic1:'7.2 Distance Formula',
        topic2:'7.3 Section Formula',
        topic3:'7.4 Area of a Triangle',
        topic4:'7.5 Summary',
        

        note1:'The Distance Formula is used to find the distance between two points in a coordinate plane. The formula is based on the Pythagorean Theorem, and it can be expressed as: distance = √[(x₂ - x₁)² + (y₂ - y₁)²]',
        note2:'The Section Formula is used to find the coordinates of a point that divides a line segment into two parts in a given ratio. The formula can be expressed as:[(x₂m + x₁n)/(m + n), (y₂m + y₁n)/(m + n)]',
        note3:'The Area of a Triangle formula is used to find the area of a triangle in a coordinate plane. The formula can be expressed as : area = 1/2 * |x₁(y₂ - y₃) + x₂(y₃ - y₁) + x₃(y₁ - y₂)|',
        note4:' Coordinate geometry is a powerful tool that enables us to study and solve geometric problems using coordinates. The distance formula, section formula, and area of a triangle formula are some of the important concepts in coordinate geometry that can be used to solve problems in various fields such as engineering, physics, and computer science.',

        example1:'For example, if we want to find the distance between points (2, 3) and (5, 7), we can use the distance formula: distance = √[(5 - 2)² + (7 - 3)²] = √(9 + 16) = √25 = 5 units.',
        example2:'For example, if we want to find the coordinates of the point that divides the line segment joining points (2, 3) and (6, 7) in the ratio 2:3, we can use the section formula: [(62 + 23)/(2+3), (72 + 33)/(2+3)] = [(12 + 6)/5, (14 + 9)/5] = (18/5, 23/5)',
        example3:'For example, if we have a triangle with vertices at (2, 3), (5, 7), and (9, 2), we can use the area of a triangle formula to find its area: area = 1/2 * |2(7 - 2) + 5(2 - 3) + 9(3 - 7)| = 1/2 * |-10| = 5 square units.',
        
        link:''
    }
}

module.exports = mathsnote;