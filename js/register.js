let form = document.querySelector("form")
form.addEventListener("submit",(e) =>
    {
        e.preventDefault()

        let fname = document.getElementById("fname").value.trim()
        let email = document.getElementById("email").value.trim()
        let password = document.getElementById("password").value.trim()

        let lowerCaseLetter = /[a-z]/g;
        let upperCaseLetter = /[A-Z]/g;
        let numbers = /[0-9]/g;

        if (fname.length < 6)
        {
            alert("Tài khoản phải ít nhất 6 ký tự.")
        }
        else if (password.length < 8)
        {
            alert("Mật khẩu phải ít nhất 8 ký tự.")
        }
        else if (!password.match(lowerCaseLetter))
        {
            alert("Mật khẩu phải có kí tự viết thường.")
        }
        else if (!password.match(upperCaseLetter))
        {
            alert("Mật khẩu phải có kí tự viết hoa.")
        }
        else if (!password.match(numbers))
        {
            alert("Mật khẩu phải có kí tự số.")
        }
        else
        {
            if (localStorage.getItem("users"))
            {
                let users = JSON.parse(localStorage.getItem("users"))
                users.push(
                    {
                        fname,
                        password,
                        email,
                    }
                )
                localStorage.setItem("users", JSON.stringify(users))
            }
            else
            {
                localStorage.setItem("users",
                    JSON.stringify(
                        [
                            fname,
                            password,
                            email,
                        ]
                    )
                )
            }
            alert("Người dùng tạo thành công, hãy đăng nhập!!!")
            location.href = "./login.html"
        }
    }
)