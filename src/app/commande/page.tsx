"use client"
import React from "react"


const Country = [
  { value: "france", label: "France" },
  { value: "allemangne", label: "Allemagne" },
  { value: "espagne", label: "Espagne" },
  { value: "italie", label: "Italie" },
  { value: "angleterre", label: "Angleterre" }
]

const DeliveryType = [
  { value: "standard", label: "Standard delivery (Free)" },
  { value: "express", label: "Epress delivery (€5,00" },
]

const PhoneNumber = 10

type FormState = {
  name: string
  email: string
  country: string
  phone: string
  city: string
  adress: string
  postalcode: string
  deliverytype: string
  hasAcceptedCgu: boolean
  errors: {
    name?: string
    email?: string
    country?: string
    phone?: string
    city?: string
    adress?: string
    postalcode?: string
    deliverytype?: string
    hasAcceptedCgu?: string
  }
}

export default function App() {
  const [state, setState] = React.useState<FormState>({
    name: "",
    email: "",
    country: Country[0].value,
    phone: "",
    city: "",
    adress: "",
    postalcode: "",
    deliverytype: DeliveryType[0].value,
    hasAcceptedCgu: false,
    errors: {},
  })
  const {
    name,
    email,
    country,
    phone,
    city,
    adress,
    postalcode,
    deliverytype,
    hasAcceptedCgu,
    errors,
  } = state

  function update(newState: Partial<FormState>) {
    setState((prevState) => ({
      ...prevState,
      ...newState,
    }))
  }

  function setErrors(newErrors: Partial<FormState["errors"]>) {
    setState((prevState) => ({
      ...prevState,
      errors: {
        ...prevState.errors,
        ...newErrors,
      },
    }))
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    update({ errors: {} })
    if (!name) {
      setErrors({ name: "Veuillez renseigner votre nom et prénom" })
      return
    }
    if (!email) {
      setErrors({ email: "Veuillez renseigner une adresse mail valide" })
      return
    }
    if (!phone) {
      setErrors({ phone: "Veuillez renseigner un numéro de téléphone" })
      return
    }
    if (phone.length < PhoneNumber) {
      setErrors({
        phone: `Le numéro de téléphone doit contenir au minimum ${PhoneNumber} caractères`,
      })
      return
    }
    if (!country) {
      setErrors({ country: "Veuillez renseigner un pays" })
      return
    }
    if (!city) {
      setErrors({ city: "Veuillez renseigner une ville" })
      return
    }
    if (!adress) {
      setErrors({ adress: "Veuillez renseigner une adresse" })
      return
    }
    if (!postalcode) {
      setErrors({ postalcode: "Veuillez renseigner un code postal" })
      return
    }
    if (!hasAcceptedCgu) {
      setErrors({
        hasAcceptedCgu: "Vous devez accepter les CGU pour vous inscrire",
      })
      return
    }
    alert("Form ok!")
  }

  const nameId = React.useId()
  const emailId = React.useId()
  const countryId = React.useId()
  const hasAcceptedCguId = React.useId()
  const phoneId = React.useId()
  const cityId = React.useId()
  const adressId = React.useId()
  const postalcodeId = React.useId()

  return (
    <form
      aria-label="Formulaire de commande"
      onSubmit={handleSubmit}
      noValidate
    >
      <div>
        <label htmlFor={nameId}>Nom et prénom</label>
        <input
          required
          id={nameId}
          value={name}
          placeholder="Jean Dupont"
          onChange={(event) => {
            update({ name: event.target.value })
          }}
          aria-invalid={!!errors.name}
        />
        {!!errors.name && <div className="form-error">{errors.name}</div>}
      </div>
      <div>
        <label htmlFor={emailId}>Adresse mail</label>
        <input
          required
          id={emailId}
          type="email"
          value={email}
          placeholder="jean.dupont@gmail.com"
          onChange={(event) => {
            update({ email: event.target.value })
          }}
          aria-invalid={!!errors.email}
        />
        {!!errors.email && <div className="form-error">{errors.email}</div>}
      </div>
      <div>
        <label htmlFor={emailId}>Numéro de téléphone</label>
        <input
          required
          id={phoneId}
          type="tel"
          value={phone}
          placeholder="0642915834"
          onChange={(event) => {
            update({ phone: event.target.value })
          }}
          aria-invalid={!!errors.phone}
        />
        {!!errors.phone && (
          <div className="form-error">{errors.phone}</div>
        )}
      </div>
      <div>
        <label htmlFor={countryId}>Pays</label>
        <select
          required
          id={countryId}
          value={country}
          onChange={(event) => update({ country: event.target.value })}
        >
          {Country.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div>
          <label htmlFor={cityId}>Ville</label>
          <input
            required
            id={cityId}
            value={city}
            placeholder="Paris"
            onChange={(event) => {
              update({ city: event.target.value })
            }}
            aria-invalid={!!errors.city}
          />
          {!!errors.city && <div className="form-error">{errors.city}</div>}
        </div>
        <div>
          <label htmlFor={adress}>Adresse</label>
          <input
            required
            id={adressId}
            value={adress}
            placeholder="5 Rue des Lilas"
            onChange={(event) => {
              update({ adress: event.target.value })
            }}
            aria-invalid={!!errors.adress}
          />
          {!!errors.adress && <div className="form-error">{errors.adress}</div>}
        </div>
        <div>
          <label htmlFor={adress}>Code postal</label>
          <input
            required
            id={postalcodeId}
            value={postalcode}
            placeholder="5 Rue des Lilas"
            onChange={(event) => {
              update({ postalcode: event.target.value })
            }}
            aria-invalid={!!errors.postalcode}
          />
          {!!errors.postalcode && <div className="form-error">{errors.postalcode}</div>}
        </div>
        <div>
          <input
            required
            type="checkbox"
            id={hasAcceptedCguId}
            checked={hasAcceptedCgu}
            onChange={(event) => update({ hasAcceptedCgu: event.target.checked })}
            aria-invalid={!!errors.hasAcceptedCgu}
          />
          <label htmlFor={hasAcceptedCguId}>
            J'accepte les <a href="#">Condition Générales d'Utilisation</a>
          </label>
          {!!errors.hasAcceptedCgu && (
            <div className="form-error">{errors.hasAcceptedCgu}</div>
          )}
        </div>
        <div>
          <fieldset>
            <legend>Moyen de livraison :</legend>
            {DeliveryType.map(({ value, label }) => (
              <div key={value}>
                <input
                  type="radio"
                  name="deliverytype"
                  id={value}
                  value={value}
                  checked={deliverytype === value}
                  onChange={(event) =>
                    update({ deliverytype: event.target.value })
                  }
                />
                <label htmlFor={value}>{label}</label>
              </div>
            ))}
          </fieldset>
        </div>
      </div>
      <button type="submit">Commander</button>
    </form>
  )
}