User.create(email: "test@test.com", password: "password")

5.times do
    pet = Pet.create(
        nombre: Faker::Name.name,
        age: Faker::Number.between(from: 1, to: 10),
        animal: Faker::Creature::Animal.name,
        color: Faker::Color.color_name,
        weight: Faker::Number.decimal(l_digits: 3, r_digits: 3),
        sex: Faker::Gender.binary_type,
        service: Faker::Boolean.boolean,
        pic:  "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80",
        vet: Faker::FunnyName.name,
        user_id: 1
    ) 
    3.times do 
        Insurance.create(
            nombre: Faker::Name.name,
            phone: Faker::PhoneNumber.cell_phone,
            policy: Faker::Number.leading_zero_number(digits: 10),
            pet_id: pet.id
        )
    end 
end 
