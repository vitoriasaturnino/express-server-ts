class UserCOntroller {
    public async create(){
        const user = new User()
        user.nome = "Vitória";
        user.idade = 22;

        await userRepository.save(user);
    }
}

export default new UserCOntroller();