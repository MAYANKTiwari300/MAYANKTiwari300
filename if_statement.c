#include <stdio.h>
int main() {
    int age;
    printf("Enter age");
    scanf("%d",& age);
    if(age>=18&& age<50)
    {
        printf("You are adult");
    }
    else if(age==50)
    {
        printf("you have done your half century");
    }
    else
    {
        printf("you are a kid");
    }
    return 0;
}